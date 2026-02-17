# RSVP Setup (Excel + Google Sheets)

## 1) Importa tu Excel a Google Sheets
1. Sube tu `.xlsx` a Google Drive.
2. Abre el archivo con Google Sheets.
3. Renombra la hoja de invitados a `Guests`.
4. Crea otra hoja llamada `Responses`.

## 2) Estructura de `Guests`
Encabezados obligatorios (fila 1):
- `id`
- `name`
- `normalized_name` (opcional, recomendado)
- `max_guests`

Ejemplo:
- `A001 | Camila Acosta | camila acosta | 2`

Si no llenas `normalized_name`, el script usa `name`.

## 3) Estructura de `Responses`
Encabezados recomendados (fila 1):
- `timestamp`
- `invite_id`
- `guest_name`
- `lookup_name`
- `attendance`
- `guest_count`
- `selected_guests`
- `message`
- `language`
- `submitted_at`

## 4) Publica Apps Script
1. En la hoja, abre `Extensions > Apps Script`.
2. Pega el contenido de `RSVP_APPS_SCRIPT.gs`.
3. `Deploy > New deployment > Web app`.
4. Execute as: `Me`.
5. Who has access: `Anyone`.
6. Copia la URL `.../exec`.
7. Si ya tenias un deployment anterior, crea una nueva version y vuelve a desplegar.

## 5) Conecta la URL en tu web
En `index.html`, reemplaza:
- `window.RSVP_API_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";`

con tu URL real de Apps Script.

## 6) Prueba rapida
1. Test de salud API en navegador:
- `TU_URL/exec?action=ping`
- Debe devolver: `{"ok":true,"message":"alive"}`
2. Busca un nombre existente del sheet `Guests`.
3. Debe mostrar "Invitacion encontrada".
4. Envia respuesta y valida que aparezca una fila nueva en `Responses`.
