const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const languageToggle = document.getElementById("languageToggle");

const dictionary = {
  en: {
    nav_home: "Home",
    nav_story: "Story",
    nav_schedule: "Schedule",
    nav_venue: "Venue",
    nav_travel: "Travel",
    nav_faq: "FAQ",
    nav_rsvp: "RSVP",
    nav_registry: "Registry",
    hero_eyebrow: "We’re getting married",
    hero_names: "Alex & Jordan",
    hero_date: "September 21, 2025 · Napa Valley, CA",
    hero_cta: "Celebrate with us",
    story_title: "Our Story",
    story_text:
      "A short paragraph placeholder about how you met, your favorite adventures, and the joy that brought you here together.",
    schedule_title: "Schedule",
    schedule_ceremony: "Ceremony",
    schedule_ceremony_time: "3:30 PM · Garden Terrace",
    schedule_reception: "Reception",
    schedule_reception_time: "5:00 PM · Vineyard Hall",
    venue_title: "Venue",
    venue_address: "The Willow Estate, 123 Vineyard Lane, Napa Valley, CA",
    venue_link: "Open in Google Maps",
    travel_title: "Travel",
    travel_intro: "We’ve reserved blocks at the hotels below and recommend flying into SFO or OAK.",
    travel_hotels: "Hotels",
    travel_hotels_text: "Hotel A, Hotel B, and a cozy boutique inn.",
    travel_transport: "Transportation",
    travel_transport_text: "Shuttle service and rideshare details coming soon.",
    faq_title: "FAQ",
    faq_attire_q: "What should I wear?",
    faq_attire_a: "Garden cocktail attire.",
    faq_kids_q: "Are children welcome?",
    faq_kids_a: "We love your little ones, but this will be an adults-only celebration.",
    faq_photos_q: "Can I take photos?",
    faq_photos_a: "We invite you to be present and let our photographer capture the day.",
    rsvp_title: "RSVP",
    rsvp_text: "Please respond by August 1, 2025.",
    rsvp_button: "RSVP on Google Form",
    registry_title: "Registry",
    registry_text: "Your presence is the best gift. If you’d like to contribute:",
    registry_link1: "Registry Link One",
    registry_link2: "Registry Link Two",
    registry_link3: "Registry Link Three",
    footer_contact: "Questions? Email us at hello@email.com",
    footer_back: "Back to top",
  },
  es: {
    nav_home: "Inicio",
    nav_story: "Historia",
    nav_schedule: "Programa",
    nav_venue: "Lugar",
    nav_travel: "Viaje",
    nav_faq: "Preguntas",
    nav_rsvp: "RSVP",
    nav_registry: "Registro",
    hero_eyebrow: "Nos casamos",
    hero_names: "Alex y Jordan",
    hero_date: "21 de septiembre de 2025 · Napa Valley, CA",
    hero_cta: "Celebra con nosotros",
    story_title: "Nuestra historia",
    story_text:
      "Un breve párrafo sobre cómo se conocieron, sus aventuras favoritas y la alegría que los trajo hasta aquí.",
    schedule_title: "Programa",
    schedule_ceremony: "Ceremonia",
    schedule_ceremony_time: "3:30 PM · Terraza Jardín",
    schedule_reception: "Recepción",
    schedule_reception_time: "5:00 PM · Salón del Viñedo",
    venue_title: "Lugar",
    venue_address: "The Willow Estate, 123 Vineyard Lane, Napa Valley, CA",
    venue_link: "Abrir en Google Maps",
    travel_title: "Viaje",
    travel_intro: "Hemos reservado bloques en los hoteles de abajo y recomendamos volar a SFO u OAK.",
    travel_hotels: "Hoteles",
    travel_hotels_text: "Hotel A, Hotel B y una posada boutique.",
    travel_transport: "Transporte",
    travel_transport_text: "Detalles de transporte y rideshare próximamente.",
    faq_title: "Preguntas frecuentes",
    faq_attire_q: "¿Qué debo vestir?",
    faq_attire_a: "Atuendo cóctel de jardín.",
    faq_kids_q: "¿Los niños son bienvenidos?",
    faq_kids_a: "Amamos a sus pequeños, pero esta será una celebración solo para adultos.",
    faq_photos_q: "¿Puedo tomar fotos?",
    faq_photos_a: "Los invitamos a estar presentes y dejar que nuestro fotógrafo capture el día.",
    rsvp_title: "RSVP",
    rsvp_text: "Por favor responde antes del 1 de agosto de 2025.",
    rsvp_button: "Confirmar en Google Form",
    registry_title: "Registro",
    registry_text: "Su presencia es el mejor regalo. Si desean contribuir:",
    registry_link1: "Enlace de registro uno",
    registry_link2: "Enlace de registro dos",
    registry_link3: "Enlace de registro tres",
    footer_contact: "¿Preguntas? Escríbenos a hello@email.com",
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

let currentLanguage = "en";
applyTranslations(currentLanguage);

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "es" : "en";
  applyTranslations(currentLanguage);
});
