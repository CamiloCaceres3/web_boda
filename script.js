const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const languageToggle = document.getElementById("languageToggle");

const dictionary = {
  en: {
    nav_home: "Home",
    nav_story: "Countdown",
    nav_schedule: "Schedule",
    nav_venue: "Venue",
    nav_travel: "Travel",
    nav_faq: "FAQ",
    nav_rsvp: "RSVP",
    nav_registry: "Gifts",
    nav_quiz: "Quiz",
    hero_eyebrow: "We’re getting married",
    hero_name_first: "Alejandra",
    hero_name_second: "Camilo",
    hero_date: "25 • 07 • 2026",
    hero_location: "Paipa, Boyacá - Colombia",
    hero_cta: "Celebrate with us",
    story_title: "Countdown",
    countdown_subtitle: "Counting down to the big day.",
    countdown_days: "Days",
    countdown_hours: "Hours",
    countdown_minutes: "Minutes",
    countdown_seconds: "Seconds",
    schedule_title: "Schedule",
    schedule_ceremony: "Ceremony",
    schedule_ceremony_time: "3:00 PM · Bosque Hotel Estelar",
    schedule_cocktail: "Cocktail",
    schedule_cocktail_time: "5:00 PM · Hotel Estelar",
    schedule_reception: "Reception",
    schedule_reception_time: "6:00 PM · Salón Sugamuxi Hotel Estelar",
    venue_title: "Venue",
    venue_address: "Hotel Estelar Centro de Convenciones Paipa, Boyacá - Colombia",
    venue_link: "Open in Google Maps",
    venue_photo_caption: "Venue photo",
    venue_map_caption: "Event map",
    travel_title: "Travel",
    travel_intro: "Stay and transport options for arriving in Paipa.",
    travel_hotels: "Hotels",
    travel_transport: "Transportation",
    travel_transport_text: "Route map from Bogotá to Paipa.",
    faq_title: "FAQ",
    faq_attire_q: "What should I wear?",
    faq_attire_a:
      "Long dress / formal suit. Examples: formal suit, tie (no bow tie), and formal shoes. Long dress (reserved color: olive green), chunky heels since the ceremony will be outdoors. Don't forget a change of shoes to dance all night.",
    faq_photos_q: "Can I take photos?",
    faq_photos_a:
      "During the couple's entrance at the ceremony, at their request, it won't be possible to take photos or use cell phones.",
    rsvp_title: "RSVP",
    rsvp_text: "Please respond by the date indicated on your invitation.",
    rsvp_button: "RSVP on Google Form",
    rsvp_calendar: "Add to calendar",
    registry_title: "Gifts",
    registry_text: "We appreciate your presence, but if you'd like to contribute, here are the details:",
    registry_list_title: "Gift list",
    registry_list_text: "Gift list (to be defined)",
    registry_colombia_title: "Transfer in Colombia",
    registry_colombia_text: "Bre-B key: @camicace",
    registry_bank_title: "Transfer in the Netherlands",
    registry_link: "https://revolut.me/camiloflij",
    quiz_title: "Quiz",
    quiz_text: "Answer 10 questions about us and see how well you know the couple.",
    quiz_button: "Start the quiz",
    footer_contact: "Questions? Email us at alecamimatri@gmail.com tel: to be defined",
    footer_credit: "Made by Cami with vibecoding 😁",
    footer_back: "Back to top",
  },
  es: {
    nav_home: "Inicio",
    nav_story: "Cuenta regresiva",
    nav_schedule: "Programa",
    nav_venue: "Lugar",
    nav_travel: "Viaje",
    nav_faq: "Preguntas",
    nav_rsvp: "RSVP",
    nav_registry: "Regalos",
    nav_quiz: "Quiz",
    hero_eyebrow: "Nos casamos",
    hero_name_first: "Alejandra",
    hero_name_second: "Camilo",
    hero_date: "25 • 07 • 2026",
    hero_location: "Paipa, Boyacá - Colombia",
    hero_cta: "Celebra con nosotros",
    story_title: "Cuenta regresiva",
    countdown_subtitle: "Cuenta regresiva para el gran día.",
    countdown_days: "Días",
    countdown_hours: "Horas",
    countdown_minutes: "Minutos",
    countdown_seconds: "Segundos",
    schedule_title: "Programa",
    schedule_ceremony: "Ceremonia",
    schedule_ceremony_time: "3:00 PM · Bosque Hotel Estelar",
    schedule_cocktail: "Cóctel",
    schedule_cocktail_time: "5:00 PM · Hotel Estelar",
    schedule_reception: "Recepción",
    schedule_reception_time: "6:00 PM · Salón Sugamuxi Hotel Estelar",
    venue_title: "Lugar",
    venue_address: "Hotel Estelar Centro de Convenciones Paipa, Boyacá - Colombia",
    venue_link: "Abrir en Google Maps",
    venue_photo_caption: "Foto del lugar",
    venue_map_caption: "Mapa del evento",
    travel_title: "Viaje",
    travel_intro: "Opciones de estadía y transporte para llegar a Paipa.",
    travel_hotels: "Hoteles",
    travel_transport: "Transporte",
    travel_transport_text: "Mapa con la ruta desde Bogotá hasta Paipa.",
    faq_title: "Preguntas frecuentes",
    faq_attire_q: "¿Qué debo vestir?",
    faq_attire_a:
      "Vestido Largo / Traje Formal. Ejemplos: traje formal, corbata (sin corbatín), zapatos formales. Vestido largo (color reservado: verde oliva), tacón grueso ya que la ceremonia será en zona campestre. No olvidar zapatos de cambio para poder bailar toda la noche.",
    faq_photos_q: "¿Puedo tomar fotos?",
    faq_photos_a:
      "En el momento de entrada de los novios en la ceremonia, por petición de los novios no es posible tomar fotos y/o sacar el celular.",
    rsvp_title: "RSVP",
    rsvp_text: "Por favor responde en la fecha indicada en tu invitación.",
    rsvp_button: "Confirmar en Google Form",
    rsvp_calendar: "Agendar en mi calendario",
    registry_title: "Regalos",
    registry_text: "Agradecemos su presencia, pero si desean contribuir estos son los datos:",
    registry_list_title: "Lista de regalos",
    registry_list_text: "Lista de regalos: por definir",
    registry_colombia_title: "Transferencia en Colombia",
    registry_colombia_text: "Llave Bre-B: @camicace",
    registry_bank_title: "Transferencia en Países Bajos",
    registry_link: "https://revolut.me/camiloflij",
    quiz_title: "Quiz",
    quiz_text: "Responde 10 preguntas sobre nosotros y descubre cuánto conoces a los novios.",
    quiz_button: "Empezar el quiz",
    footer_contact: "¿Preguntas? Escríbenos a alecamimatri@gmail.com tel: por definir",
    footer_credit: "Hecho por Cami con vibecoding 😁",
    footer_back: "Volver arriba",
  },
};

const applyTranslations = (lang) => {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[lang][key]) {
      element.textContent = dictionary[lang][key];
    }
  });

  document.querySelectorAll(".language-toggle .lang-option").forEach((option) => {
    option.classList.toggle("active", option.dataset.lang === lang);
  });
};

const toggleMenu = () => {
  const isOpen = navLinks.classList.toggle("show");
  navToggle.setAttribute("aria-expanded", isOpen);
};

if (navToggle) {
  navToggle.addEventListener("click", toggleMenu);
}

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    navToggle.setAttribute("aria-expanded", false);
  });
});

document.querySelectorAll(".accordion-item").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      const siblingPanel = item.nextElementSibling;
      if (siblingPanel) {
        siblingPanel.classList.remove("open");
      }
    });

    button.setAttribute("aria-expanded", String(!isExpanded));
    if (panel) {
      panel.classList.toggle("open", !isExpanded);
    }
  });
});

const countdownValues = {
  days: document.querySelector('[data-countdown-value="days"]'),
  hours: document.querySelector('[data-countdown-value="hours"]'),
  minutes: document.querySelector('[data-countdown-value="minutes"]'),
  seconds: document.querySelector('[data-countdown-value="seconds"]'),
};

const weddingDate = new Date("2026-07-25T15:00:00-05:00");

const updateCountdown = () => {
  const now = new Date();
  const diff = weddingDate - now;
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  if (countdownValues.days) {
    countdownValues.days.textContent = String(days).padStart(2, "0");
  }
  if (countdownValues.hours) {
    countdownValues.hours.textContent = String(hours).padStart(2, "0");
  }
  if (countdownValues.minutes) {
    countdownValues.minutes.textContent = String(minutes).padStart(2, "0");
  }
  if (countdownValues.seconds) {
    countdownValues.seconds.textContent = String(seconds).padStart(2, "0");
  }
};

let currentLanguage = "en";
applyTranslations(currentLanguage);
updateCountdown();
setInterval(updateCountdown, 1000);

const hasCountdown = Object.values(countdownValues).some(Boolean);
if (hasCountdown) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "es" : "en";
  applyTranslations(currentLanguage);
});
