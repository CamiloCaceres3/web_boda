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
    hero_eyebrow: "We're getting married",
    hero_name_first: "alejandra",
    hero_name_second: "camilo",
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
    venue_photo_caption: "Estelar Hotel",
    venue_map_caption: "Event map",
    travel_title: "Travel",
    travel_intro: "Stay and transport options for arriving in Paipa.",
    travel_hotels: "Hotels",
        travel_hotels_subtitle: "Select the option that best matches your style.",
    travel_hotel_estelar: "Wedding venue",
    travel_hotel_sochagota: "Lakeside resort",
    travel_hotel_colonial: "Classic style",
    travel_hotel_lanceros: "Modern comfort",
    travel_hotel_salitre: "Countryside retreat",
    travel_hotel_action: "View",travel_transport: "Transportation",
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
    quiz_eyebrow: "The couple's quiz",
    quiz_page_title: "How well do you know us?",
    quiz_subtitle: "Answer the 10 questions. If you get at least 5 right, we will cheer for you!",
    quiz_back: "Back to the invitation",
    quiz_q1: "1. In which city did we get engaged?",
    quiz_q1_a1: "Vienna",
    quiz_q1_a2: "Prague",
    quiz_q1_a3: "Budapest",
    quiz_q2: "2. What is our favorite Sunday plan?",
    quiz_q2_a1: "Shopping",
    quiz_q2_a2: "Coffee and a walk",
    quiz_q2_a3: "Movies and popcorn",
    quiz_q3: "3. Which dessert do we share the most?",
    quiz_q3_a1: "Tiramisu",
    quiz_q3_a2: "Brownie",
    quiz_q3_a3: "Ice cream",
    quiz_q4: "4. What is our dream destination?",
    quiz_q4_a1: "Italy",
    quiz_q4_a2: "Japan",
    quiz_q4_a3: "Mexico",
    quiz_q5: "5. What do we like to do when we travel?",
    quiz_q5_a1: "Only the beach",
    quiz_q5_a2: "Mix adventure and local food",
    quiz_q5_a3: "Go shopping",
    quiz_q6: "6. What is our favorite song?",
    quiz_q6_a1: "Song A",
    quiz_q6_a2: "Song B",
    quiz_q6_a3: "Song C",
    quiz_q7: "7. How do we like to celebrate anniversaries?",
    quiz_q7_a1: "Special dinner and a toast",
    quiz_q7_a2: "Big party",
    quiz_q7_a3: "Surprise getaway",
    quiz_q8: "8. What snack can we never be without?",
    quiz_q8_a1: "Chocolate",
    quiz_q8_a2: "French fries",
    quiz_q8_a3: "Cookies",
    quiz_q9: "9. What is our favorite drink to toast with?",
    quiz_q9_a1: "Sparkling wine",
    quiz_q9_a2: "Beer",
    quiz_q9_a3: "Tropical cocktail",
    quiz_q10: "10. What cannot be missing at our wedding?",
    quiz_q10_a1: "Lots of flowers",
    quiz_q10_a2: "Music to dance all night",
    quiz_q10_a3: "Fireworks",
    quiz_submit: "Submit answers",
    quiz_result_score: "You answered {correct} out of {total} correctly.",
    quiz_result_completion_hint: " You can complete the remaining questions for a full result.",
    quiz_result_success: " Congratulations for knowing the couple!",
    quiz_result_thanks: " Thanks for participating.",
    footer_contact: "Questions? Email us at alecamimatri@gmail.com tel: to be defined",
    footer_credit: "Made by Cami and Ale with vibecoding 😄 ",
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
    hero_name_first: "alejandra",
    hero_name_second: "camilo",
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
    venue_photo_caption: "Hotel Estelar",
    venue_map_caption: "Mapa del evento",
    travel_title: "Viaje",
    travel_intro: "Opciones de estadía y transporte para llegar a Paipa.",
    travel_hotels: "Hoteles",
        travel_hotels_subtitle: "Elige la opción que mejor se ajuste a tu estilo.",
    travel_hotel_estelar: "Hotel de la boda",
    travel_hotel_sochagota: "Resort junto al lago",
    travel_hotel_colonial: "Estilo clásico",
    travel_hotel_lanceros: "Comodidad moderna",
    travel_hotel_salitre: "Retiro campestre",
    travel_hotel_action: "Ver",travel_transport: "Transporte",
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
    quiz_eyebrow: "Quiz de los novios",
    quiz_page_title: "¿Cuánto nos conoces?",
    quiz_subtitle: "Responde las 10 preguntas. Si aciertas al menos 5, ¡te felicitaremos!",
    quiz_back: "Volver a la invitación",
    quiz_q1: "1. ¿En qué ciudad nos comprometimos?",
    quiz_q1_a1: "Viena",
    quiz_q1_a2: "Praga",
    quiz_q1_a3: "Budapest",
    quiz_q2: "2. ¿Cuál es nuestro plan favorito de domingo?",
    quiz_q2_a1: "Ir de compras",
    quiz_q2_a2: "Café y caminata",
    quiz_q2_a3: "Cine y palomitas",
    quiz_q3: "3. ¿Cuál es el postre que más compartimos?",
    quiz_q3_a1: "Tiramisú",
    quiz_q3_a2: "Brownie",
    quiz_q3_a3: "Helado",
    quiz_q4: "4. ¿Cuál es nuestro destino soñado?",
    quiz_q4_a1: "Italia",
    quiz_q4_a2: "Japón",
    quiz_q4_a3: "México",
    quiz_q5: "5. ¿Qué nos gusta hacer en viajes?",
    quiz_q5_a1: "Solo playa",
    quiz_q5_a2: "Mezclar aventura y comida local",
    quiz_q5_a3: "Ir de compras",
    quiz_q6: "6. ¿Cuál es nuestra canción favorita?",
    quiz_q6_a1: "Canción A",
    quiz_q6_a2: "Canción B",
    quiz_q6_a3: "Canción C",
    quiz_q7: "7. ¿Cómo nos gusta celebrar los aniversarios?",
    quiz_q7_a1: "Cena especial y brindis",
    quiz_q7_a2: "Gran fiesta",
    quiz_q7_a3: "Escapada sorpresa",
    quiz_q8: "8. ¿Cuál es nuestro snack infaltable?",
    quiz_q8_a1: "Chocolate",
    quiz_q8_a2: "Papas fritas",
    quiz_q8_a3: "Galletas",
    quiz_q9: "9. ¿Cuál es nuestra bebida favorita para brindar?",
    quiz_q9_a1: "Vino espumoso",
    quiz_q9_a2: "Cerveza",
    quiz_q9_a3: "Cóctel tropical",
    quiz_q10: "10. ¿Qué no puede faltar en nuestra boda?",
    quiz_q10_a1: "Muchísimas flores",
    quiz_q10_a2: "Música para bailar toda la noche",
    quiz_q10_a3: "Fuegos artificiales",
    quiz_submit: "Enviar respuestas",
    quiz_result_score: "Respondiste {correct} de {total} correctamente.",
    quiz_result_completion_hint: " Puedes completar las restantes para un resultado completo.",
    quiz_result_success: " ¡Felicitaciones por conocer a los novios!",
    quiz_result_thanks: " Gracias por participar.",
    footer_contact: "¿Preguntas? Escríbenos a alecamimatri@gmail.com tel: por definir",
    footer_credit: "Hecho por Cami y Ale con vibecoding 😄",
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
  if (!navLinks || !navToggle) {
    return;
  }
  const isOpen = navLinks.classList.toggle("show");
  navToggle.setAttribute("aria-expanded", isOpen);
};

if (navToggle) {
  navToggle.addEventListener("click", toggleMenu);
}

if (navLinks) {
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      navToggle.setAttribute("aria-expanded", false);
    });
  });
}

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

let currentLanguage = "es";
applyTranslations(currentLanguage);
updateCountdown();
setInterval(updateCountdown, 1000);

const hasCountdown = Object.values(countdownValues).some(Boolean);
if (hasCountdown) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    applyTranslations(currentLanguage);
  });
}

window.i18n = {
  dictionary,
  applyTranslations,
  getCurrentLanguage: () => currentLanguage,
};




const heroContent = document.querySelector(".hero-content");
const heroSection = document.querySelector(".hero");

const enableHeroParallax = () => {
  if (!heroContent) {
    return;
  }
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  let ticking = false;
  const onScroll = () => {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(() => {
      const rect = (heroSection || heroContent).getBoundingClientRect();
      const maxShift = 120;
      const progress = Math.min(Math.max(-rect.top, 0), window.innerHeight);
      const shift = Math.min(maxShift, progress * 0.25);
      heroContent.style.transform = `translateY(${shift}px)`;
      ticking = false;
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
};

enableHeroParallax();


const heroContentAnimation = document.querySelector('.hero-content');
if (heroContentAnimation) {
  window.addEventListener('load', () => {
    heroContentAnimation.classList.add('is-animated');
  });
}




const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}



const entrySplash = document.getElementById('entrySplash');
const entryButton = document.getElementById('entryButton');
const siteMain = document.querySelector('.site-main');
if (entrySplash && entryButton && siteMain) {
  entryButton.addEventListener('click', () => {
    const splashImg = entryButton.querySelector('img');
    if (splashImg) {
      splashImg.classList.add('is-rotating');
    }
    const isMobile = window.matchMedia('(max-width: 600px)').matches;
    const delay = isMobile ? 650 : 250;
    setTimeout(() => {
      entrySplash.classList.add('is-hidden');
      document.body.classList.remove('splash-open');
      siteMain.classList.add('is-visible');
      siteMain.setAttribute('aria-hidden', 'false');
      entrySplash.setAttribute('aria-hidden', 'true');
      setTimeout(() => { entrySplash.style.display = 'none'; }, 450);
    }, delay);
  });
}


