/**
 * Google Apps Script backend for interactive RSVP.
 *
 * Sheet 1: Guests
 * Headers: id | name | normalized_name | max_guests
 *
 * Sheet 2: Responses
 * Headers: timestamp | invite_id | guest_name | lookup_name | attendance | guest_count | message | language | submitted_at
 */

const GUESTS_SHEET = "Guests";
const RESPONSES_SHEET = "Responses";
const SPREADSHEET_ID = "";

function doGet(e) {
  const action = String((e && e.parameter && e.parameter.action) || "").toLowerCase();
  if (action === "ping") {
    return jsonResponse({ ok: true, message: "alive" });
  }
  if (action === "diag") {
    return jsonResponse(handleDiagnostics(e));
  }
  return jsonResponse({ ok: true, message: "rsvp_api" });
}

function doPost(e) {
  try {
    const body = parseRequestBody(e);
    const action = String(body.action || "").toLowerCase();

    if (action === "lookup") {
      return jsonResponse(handleLookup(body));
    }

    if (action === "submit") {
      return jsonResponse(handleSubmit(body));
    }

    return jsonResponse({ ok: false, error: "invalid_action" });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message || "unexpected_error" });
  }
}

function parseRequestBody(e) {
  if (!e) {
    return {};
  }

  const content = (e.postData && e.postData.contents) || "";
  if (content) {
    try {
      return JSON.parse(content);
    } catch (error) {
      // Ignore JSON parse errors; fallback to URL-encoded parameters.
    }
  }

  return e.parameter || {};
}

function handleLookup(body) {
  const rawName = String(body.name || "").trim();
  if (!rawName) {
    return { ok: false, found: false, error: "missing_name" };
  }

  const normalizedQuery = normalizeName(rawName);
  const spreadsheet = getSpreadsheet();
  const guestsSheet = findSheetByName(spreadsheet, GUESTS_SHEET);
  if (!guestsSheet) {
    return { ok: false, found: false, error: "missing_guests_sheet" };
  }

  const rows = guestsSheet.getDataRange().getValues();
  if (rows.length <= 1) {
    return { ok: true, found: false };
  }

  const headers = rows[0].map((h) => normalizeHeader(h));
  const idIndex = findHeaderIndex(headers, ["id", "invite_id", "codigo", "code"]);
  const nameIndex = findHeaderIndex(headers, ["name", "nombre", "guest_name", "invitado"]);
  const normalizedIndex = findHeaderIndex(headers, ["normalized_name", "nombre_normalizado", "name_normalized"]);
  const maxGuestsIndex = findHeaderIndex(headers, ["max_guests", "maximo_invitados", "cupos", "guests"]);

  if (idIndex < 0 || nameIndex < 0 || maxGuestsIndex < 0) {
    return { ok: false, found: false, error: "invalid_guests_headers" };
  }

  let bestContainsMatch = null;

  for (let i = 1; i < rows.length; i += 1) {
    const row = rows[i];
    const normalizedFromName = normalizeName(String(row[nameIndex] || ""));
    const normalizedFromAlias =
      normalizedIndex >= 0 ? normalizeName(String(row[normalizedIndex] || "")) : "";

    const exactMatch =
      normalizedFromName === normalizedQuery ||
      (normalizedFromAlias && normalizedFromAlias === normalizedQuery);

    if (exactMatch) {
      const guest = buildGuestResponse(row, idIndex, nameIndex, maxGuestsIndex, rows);
      const latestResponse = getLatestResponseForInviteId(spreadsheet, guest.id);
      if (latestResponse) {
        guest.latestResponse = latestResponse;
      }
      return {
        ok: true,
        found: true,
        guest: guest,
      };
    }

    const partialMatch =
      isPartialNameMatch(normalizedQuery, normalizedFromName) ||
      (normalizedFromAlias && isPartialNameMatch(normalizedQuery, normalizedFromAlias));

    if (!bestContainsMatch && partialMatch) {
      bestContainsMatch = row;
    }
  }

  if (bestContainsMatch) {
    const guest = buildGuestResponse(bestContainsMatch, idIndex, nameIndex, maxGuestsIndex, rows);
    const latestResponse = getLatestResponseForInviteId(spreadsheet, guest.id);
    if (latestResponse) {
      guest.latestResponse = latestResponse;
    }
    return {
      ok: true,
      found: true,
      guest: guest,
      matchType: "partial",
    };
  }

  return { ok: true, found: false };
}

function buildGuestResponse(row, idIndex, nameIndex, maxGuestsIndex, allRows) {
  const householdId = String(row[idIndex] || "").trim();
  return {
    id: householdId,
    displayName: String(row[nameIndex] || "").trim(),
    maxGuests: Number(row[maxGuestsIndex] || 0),
    guestGroup: getGuestGroup(allRows, householdId, idIndex, nameIndex),
  };
}

function getGuestGroup(rows, householdId, idIndex, nameIndex) {
  if (!rows || !rows.length || !householdId) {
    return [];
  }

  const members = [];
  for (let i = 1; i < rows.length; i += 1) {
    const row = rows[i];
    const rowId = String(row[idIndex] || "").trim();
    if (rowId !== householdId) {
      continue;
    }
    const memberName = String(row[nameIndex] || "").trim();
    if (memberName) {
      members.push(memberName);
    }
  }
  return members;
}

function getLatestResponseForInviteId(spreadsheet, inviteId) {
  const normalizedInviteId = String(inviteId || "").trim();
  if (!normalizedInviteId) {
    return null;
  }

  const responsesSheet = findSheetByName(spreadsheet, RESPONSES_SHEET);
  if (!responsesSheet) {
    return null;
  }

  const rows = responsesSheet.getDataRange().getValues();
  if (rows.length <= 1) {
    return null;
  }

  const headers = rows[0].map((h) => normalizeHeader(h));
  const inviteIdIndex = findHeaderIndex(headers, ["invite_id", "inviteid", "id", "codigo"]);
  const attendanceIndex = findHeaderIndex(headers, ["attendance", "asistencia", "status", "estado"]);
  const guestCountIndex = findHeaderIndex(headers, ["guest_count", "guestcount", "numero_asistentes"]);
  const selectedGuestsIndex = findHeaderIndex(headers, [
    "selected_guests",
    "selectedguests",
    "invitados_seleccionados",
  ]);
  const messageIndex = findHeaderIndex(headers, ["message", "mensaje"]);
  const submittedAtIndex = findHeaderIndex(headers, ["submitted_at", "submittedat", "fecha_envio"]);

  if (inviteIdIndex < 0 || attendanceIndex < 0) {
    return null;
  }

  let latestRow = null;
  for (let i = 1; i < rows.length; i += 1) {
    const row = rows[i];
    const rowInviteId = String(row[inviteIdIndex] || "").trim();
    if (rowInviteId === normalizedInviteId) {
      latestRow = row;
    }
  }

  if (!latestRow) {
    return null;
  }

  const attendance = normalizeAttendanceValue(latestRow[attendanceIndex]);
  const guestCountRaw = Number(guestCountIndex >= 0 ? latestRow[guestCountIndex] : NaN);
  const guestCount = Number.isFinite(guestCountRaw) ? Math.max(0, guestCountRaw) : 0;
  const selectedGuestsRaw = String(
    selectedGuestsIndex >= 0 ? latestRow[selectedGuestsIndex] || "" : ""
  );
  const selectedGuests = selectedGuestsRaw
    .split(",")
    .map((name) => String(name || "").trim())
    .filter(Boolean);

  return {
    attendance: attendance,
    guestCount: guestCount,
    selectedGuests: selectedGuests,
    message: String(messageIndex >= 0 ? latestRow[messageIndex] || "" : "").trim(),
    submittedAt: String(submittedAtIndex >= 0 ? latestRow[submittedAtIndex] || "" : "").trim(),
  };
}

function normalizeAttendanceValue(value) {
  const normalized = normalizeName(value).replace(/\s+/g, "");
  if (
    normalized === "yes" ||
    normalized === "si" ||
    normalized === "s" ||
    normalized === "attending" ||
    normalized === "confirmado" ||
    normalized === "confirmada" ||
    normalized === "true" ||
    normalized === "1"
  ) {
    return "yes";
  }
  if (
    normalized === "no" ||
    normalized === "declined" ||
    normalized === "cancelled" ||
    normalized === "canceled" ||
    normalized === "false" ||
    normalized === "0"
  ) {
    return "no";
  }
  return "";
}

function isPartialNameMatch(query, candidate) {
  if (!query || !candidate) {
    return false;
  }

  if (candidate.indexOf(query) >= 0 || query.indexOf(candidate) >= 0) {
    return true;
  }

  const queryTokens = query.split(" ").filter(Boolean);
  if (!queryTokens.length) {
    return false;
  }

  return queryTokens.every((token) => candidate.indexOf(token) >= 0);
}

function normalizeHeader(value) {
  return normalizeName(value).replace(/\s+/g, "_");
}

function findHeaderIndex(headers, aliases) {
  for (let i = 0; i < aliases.length; i += 1) {
    const index = headers.indexOf(aliases[i]);
    if (index >= 0) {
      return index;
    }
  }
  return -1;
}

function handleSubmit(body) {
  const inviteId = String(body.inviteId || "").trim();
  const guestName = String(body.guestName || "").trim();
  const lookupName = String(body.lookupName || "").trim();
  const attendance = String(body.attendance || "").trim().toLowerCase();
  const guestCount = Number(body.guestCount);
  const selectedGuests = String(body.selectedGuests || "").trim();
  const message = String(body.message || "").trim();
  const language = String(body.language || "").trim();
  const submittedAt = String(body.submittedAt || "").trim();

  if (!inviteId || !guestName || !attendance || !Number.isFinite(guestCount) || guestCount < 0) {
    return { ok: false, error: "invalid_payload" };
  }

  const spreadsheet = getSpreadsheet();
  const responsesSheet = getOrCreateResponsesSheet(spreadsheet);

  responsesSheet.appendRow([
    new Date(),
    inviteId,
    guestName,
    lookupName,
    attendance,
    guestCount,
    selectedGuests,
    message,
    language,
    submittedAt,
  ]);

  return { ok: true };
}

function getOrCreateResponsesSheet(spreadsheet) {
  const existing = findSheetByName(spreadsheet, RESPONSES_SHEET);
  if (existing) {
    return existing;
  }

  const created = spreadsheet.insertSheet(RESPONSES_SHEET);
  created.appendRow([
    "timestamp",
    "invite_id",
    "guest_name",
    "lookup_name",
    "attendance",
    "guest_count",
    "selected_guests",
    "message",
    "language",
    "submitted_at",
  ]);
  return created;
}

function getSpreadsheet() {
  if (SPREADSHEET_ID) {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  }

  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (!active) {
    throw new Error("no_active_spreadsheet");
  }
  return active;
}

function findSheetByName(spreadsheet, expectedName) {
  const exact = spreadsheet.getSheetByName(expectedName);
  if (exact) {
    return exact;
  }

  const normalizedExpected = normalizeName(expectedName);
  const sheets = spreadsheet.getSheets();
  for (let i = 0; i < sheets.length; i += 1) {
    const sheet = sheets[i];
    if (normalizeName(sheet.getName()) === normalizedExpected) {
      return sheet;
    }
  }
  return null;
}

function handleDiagnostics(e) {
  try {
    const queryName = String((e && e.parameter && e.parameter.name) || "").trim();
    const spreadsheet = getSpreadsheet();
    const guestsSheet = findSheetByName(spreadsheet, GUESTS_SHEET);
    const sheetNames = spreadsheet.getSheets().map(function (sheet) {
      return sheet.getName();
    });

    if (!guestsSheet) {
      return {
        ok: false,
        error: "missing_guests_sheet",
        spreadsheetName: spreadsheet.getName(),
        availableSheets: sheetNames,
      };
    }

    const rows = guestsSheet.getDataRange().getValues();
    const headers = rows.length ? rows[0] : [];
    const lookupResult = queryName ? handleLookup({ name: queryName }) : null;

    return {
      ok: true,
      spreadsheetName: spreadsheet.getName(),
      guestsSheetName: guestsSheet.getName(),
      availableSheets: sheetNames,
      totalRows: rows.length,
      headers: headers,
      normalizedHeaders: headers.map(function (header) {
        return normalizeHeader(header);
      }),
      query: queryName,
      normalizedQuery: normalizeName(queryName),
      sampleRows: rows.slice(1, 6).map(function (row) {
        return row;
      }),
      lookupResult: lookupResult,
    };
  } catch (error) {
    return { ok: false, error: error.message || "diag_error" };
  }
}

function normalizeName(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
