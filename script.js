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
    nav_rolo: "Rolo Dictionary",
    nav_faq: "Important details",
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
    countdown_subtitle: "Coming Soon",
    countdown_days: "Days",
    countdown_hours: "Hours",
    countdown_minutes: "Minutes",
    countdown_seconds: "Seconds",
    schedule_title: "Schedule",
    schedule_ceremony: "Ceremony",
    schedule_ceremony_time: "3:00 PM · Bosque Hotel Estelar",
    schedule_ceremony_time_only: "3:00",
    schedule_ceremony_period: "PM",
    schedule_ceremony_place: "Bosque Hotel Estelar",
    schedule_cocktail: "Cocktail",
    schedule_cocktail_time: "5:00 PM · Hotel Estelar",
    schedule_cocktail_time_only: "5:00",
    schedule_cocktail_period: "PM",
    schedule_cocktail_place: "Hotel Estelar",
    schedule_reception: "Reception",
    schedule_reception_time: "6:00 PM · Salón Sugamuxi Hotel Estelar",
    schedule_reception_time_only: "6:00",
    schedule_reception_period: "PM",
    schedule_reception_place: "Salón Sugamuxi Hotel Estelar",
    venue_title: "Venue",
    venue_address: "Hotel Estelar Centro de Convenciones Paipa, Boyacá - Colombia",
    venue_link: "Open in Google Maps",
    venue_photo_caption: "Estelar Hotel",
    travel_title: "Travel",
    travel_intro: "Stay and transport options for arriving in Paipa.",
    travel_hotels: "Hotels",
        travel_hotels_subtitle: "Select the option that best matches your style.",
    travel_hotel_estelar: "Wedding venue",
    travel_hotel_sochagota: "Lakeside resort, 4 km away from the event",
    travel_hotel_colonial: "Classic style, 3.3 km away from the event",
    travel_hotel_lanceros: "Modern comfort, 3.7 km away from the event",
    travel_hotel_salitre: "Countryside retreat, 3.5 km away from the event",
    travel_hotel_action: "View",travel_transport: "Transportation",
    travel_transport_text: "Route map from Bogotá to Paipa.",
    rolo_title: "Rolo Dictionary",
    rolo_intro:
      "For our international guests: this is not a dictionary, it’s a survival guide. Rolo means someone from Bogotá.",
    rolo_cat_basic: "Basic",
    rolo_cat_time: "Time",
    rolo_cat_social: "Social",
    rolo_cat_party: "Party",
    rolo_cat_people: "People",
    rolo_cat_boyaca: "Boyacá",
    rolo_cat_safety: "Safety",
    rolo_col_expression: "Expression",
    rolo_col_literal: "Literal translation",
    rolo_col_meaning: "Real meaning",
    rolo_col_english: "Meaning in English",
    rolo_basic_pola_expr: "Pola",
    rolo_basic_pola_lit: "Beer brand",
    rolo_basic_pola_mean: "Cerveza",
    rolo_basic_pola_en: "Beer",
    rolo_basic_guaro_expr: "Guaro",
    rolo_basic_guaro_lit: "Liquor",
    rolo_basic_guaro_mean: "Aguardiente",
    rolo_basic_guaro_en: "Anise liquor shot",
    rolo_basic_tinto_expr: "Tinto",
    rolo_basic_tinto_lit: "Red wine",
    rolo_basic_tinto_mean: "Café negro",
    rolo_basic_tinto_en: "Black coffee",
    rolo_basic_parche_expr: "Parche",
    rolo_basic_parche_lit: "Patch",
    rolo_basic_parche_mean: "Plan/grupo",
    rolo_basic_parche_en: "Hangout",
    rolo_basic_vaca_expr: "Hacer vaca",
    rolo_basic_vaca_lit: "Make a cow",
    rolo_basic_vaca_mean: "Recolectar dinero",
    rolo_basic_vaca_en: "Split the bill",
    rolo_time_ahorita_expr: "Ahorita",
    rolo_time_ahorita_lit: "Right now",
    rolo_time_ahorita_mean: "Tal vez pronto",
    rolo_time_ahorita_en: "Maybe soon",
    rolo_time_yacasi_expr: "Ya casi",
    rolo_time_yacasi_lit: "Already almost",
    rolo_time_yacasi_mean: "Falta bastante",
    rolo_time_yacasi_en: "Not soon",
    rolo_time_cinco_expr: "En 5 minutos",
    rolo_time_cinco_lit: "In 5 minutes",
    rolo_time_cinco_mean: "20–40 minutos",
    rolo_time_cinco_en: "Not in 5 minutes",
    rolo_time_saliendo_expr: "Voy saliendo",
    rolo_time_saliendo_lit: "I'm leaving",
    rolo_time_saliendo_mean: "Aún en casa",
    rolo_time_saliendo_en: "Haven’t left yet",
    rolo_social_quepena_expr: "Qué pena",
    rolo_social_quepena_lit: "What a shame",
    rolo_social_quepena_mean: "Permiso/perdón",
    rolo_social_quepena_en: "Excuse me / sorry",
    rolo_social_fresco_expr: "Fresco",
    rolo_social_fresco_lit: "Fresh",
    rolo_social_fresco_mean: "Tranquilo",
    rolo_social_fresco_en: "No worries",
    rolo_social_paila_expr: "Paila",
    rolo_social_paila_lit: "Frying pan",
    rolo_social_paila_mean: "Mala suerte",
    rolo_social_paila_en: "That sucks",
    rolo_social_chimba_expr: "Una chimba",
    rolo_social_chimba_lit: "A monkey",
    rolo_social_chimba_mean: "Excelente",
    rolo_social_chimba_en: "Awesome",
    rolo_party_ronda_expr: "Otra ronda",
    rolo_party_ronda_lit: "Another round",
    rolo_party_ronda_mean: "Más trago",
    rolo_party_ronda_en: "More drinks coming",
    rolo_party_ultima_expr: "La última",
    rolo_party_ultima_lit: "The last",
    rolo_party_ultima_mean: "Quedan muchas",
    rolo_party_ultima_en: "Not the last",
    rolo_party_unaynos_expr: "Una y nos vamos",
    rolo_party_unaynos_lit: "One and we leave",
    rolo_party_unaynos_mean: "No nos vamos",
    rolo_party_unaynos_en: "We won’t leave",
    rolo_party_flojo_expr: "No sea flojo",
    rolo_party_flojo_lit: "Don't be lazy",
    rolo_party_flojo_mean: "Baile",
    rolo_party_flojo_en: "Dance",
    rolo_people_perro_expr: "Mi perro",
    rolo_people_perro_lit: "My dog",
    rolo_people_perro_mean: "Amigo",
    rolo_people_perro_en: "Buddy",
    rolo_people_llave_expr: "Llave",
    rolo_people_llave_lit: "Key",
    rolo_people_llave_mean: "Mejor amigo",
    rolo_people_llave_en: "Best friend",
    rolo_people_jefe_expr: "Jefe",
    rolo_people_jefe_lit: "Boss",
    rolo_people_jefe_mean: "Señor",
    rolo_people_jefe_en: "Sir",
    rolo_boyaca_sumerce_expr: "Sumercé",
    rolo_boyaca_sumerce_lit: "Your mercy",
    rolo_boyaca_sumerce_mean: "Usted respetuoso",
    rolo_boyaca_sumerce_en: "Polite you",
    rolo_boyaca_regaleme_expr: "Regáleme",
    rolo_boyaca_regaleme_lit: "Gift me",
    rolo_boyaca_regaleme_mean: "Por favor deme",
    rolo_boyaca_regaleme_en: "May I have",
    rolo_boyaca_orden_expr: "A la orden",
    rolo_boyaca_orden_lit: "At the order",
    rolo_boyaca_orden_mean: "Con gusto",
    rolo_boyaca_orden_en: "My pleasure",
    rolo_safety_papaya_expr: "No dar papaya",
    rolo_safety_papaya_lit: "Don't give papaya",
    rolo_safety_papaya_mean: "No facilitar robo",
    rolo_safety_papaya_en: "Don’t make yourself an easy target",
    faq_title: "Important details",
    faq_attire_q: "What should I wear?",
    faq_attire_a:
      "Long dress / formal suit. Examples: formal suit, tie (no bow tie), and formal shoes. Long dress (reserved color: olive green), chunky heels since the ceremony will be outdoors. Don't forget a change of shoes to dance all night.",
    faq_photos_q: "Can I take photos?",
    faq_photos_a:
      "During the couple's entrance at the ceremony, at their request, it won't be possible to take photos or use cell phones.",
    rsvp_title: "RSVP",
    rsvp_text: "We appreciate you confirming your attendance.",
    rsvp_name_label: "Full name",
    rsvp_name_placeholder: "Type your first and last name",
    rsvp_lookup_button: "Find invitation",
    rsvp_found_guest: "Guest:",
    rsvp_group_title: "Guests in this reservation",
    rsvp_attendees_label: "Who is attending",
    rsvp_attendees_hint: "Select the people in your group who will attend.",
    rsvp_attendance_label: "Will you attend?",
    rsvp_attendance_placeholder: "Select one option",
    rsvp_attendance_yes: "Yes, I will attend",
    rsvp_attendance_no: "No, I cannot attend",
    rsvp_guests_label: "Number of attendees",
    rsvp_message_label: "Message (optional)",
    rsvp_message_placeholder: "Write a message for the couple",
    rsvp_submit_button: "Send RSVP",
    rsvp_update_button: "Update RSVP",
    rsvp_lookup_searching: "Searching invitation...",
    rsvp_lookup_not_found: "We could not find your name. Please contact the couple.",
    rsvp_lookup_error: "Could not validate your invitation right now. Please try again.",
    rsvp_lookup_success: "Invitation found.",
    rsvp_lookup_already_confirmed:
      "You have already confirmed your attendance. You can change your status below.",
    rsvp_lookup_already_canceled:
      "You have already marked that you cannot attend. You can change your status below.",
    rsvp_lookup_already_submitted:
      "Your RSVP was already submitted. You can change your status below.",
    rsvp_submit_sending: "Sending your RSVP...",
    rsvp_submit_success: "Thanks! Your RSVP was saved.",
    rsvp_submit_error: "Your RSVP could not be saved. Please try again.",
    rsvp_submit_validation_error: "Review your data before sending.",
    rsvp_calendar: "Add to calendar",
    registry_title: "Gifts",
    registry_text: "We appreciate your presence, but if you'd like to contribute, here are the details:",
    registry_list_title: "Gift list",
    registry_list_text: "View gift list",
    registry_honeymoon_title: "Honeymoon",
    registry_honeymoon_text: "Honeymoon contribution options:",
    registry_colombia_title: "Colombia",
    registry_colombia_text: "Bre-B key: @camicace",
    registry_bank_title: "Netherlands / Europe",
    registry_link: "https://revolut.me/camiloflij",
    quiz_title: "Quiz",
    quiz_text: "Answer 10 questions about us and see how well you know the couple.",
    quiz_button: "Start the quiz",
    quiz_eyebrow: "The couple's quiz",
    quiz_page_title: "How well do you know us?",
    quiz_subtitle: "Answer the 10 questions. If you get at least 5 right, we will cheer for you!",
    quiz_back: "Back to the invitation",
    quiz_q1: "1. In which city did we get engaged?",
    quiz_q1_a1: "Utrecht",
    quiz_q1_a2: "Cerinza",
    quiz_q1_a3: "Budapest",
    quiz_q2: "2. What is our favorite cocktail?",
    quiz_q2_a1: "Martini",
    quiz_q2_a2: "Aperol Spritz",
    quiz_q2_a3: "Margarita",
    quiz_q3: "3. What can never be missing at dinner at home?",
    quiz_q3_a1: "Sparkling water (because we’re basically old now)",
    quiz_q3_a2: "Coca-Cola… because what even is that",
    quiz_q3_a3: "Lulo juice — Colombia is amazing",
    quiz_q4: "4. When we visit a new city, what places do we *actually* hunt down first?",
    quiz_q4_a1: "Architecture & football stadiums",
    quiz_q4_a2: "Museums & bars (culture… and more culture)",
    quiz_q4_a3: "Shops & parks",
    quiz_q5: "5. If this song plays… the dance floor is no longer family-friendly. Which one is it?",
    quiz_q5_a1: "We lose all elegance",
    quiz_q5_a2: "The circle forms",
    quiz_q5_a3: "Pa' Que Se Lo Gozen — Tego Calderón",
    quiz_q6: "6. Statistically speaking, Camilo receives Pao-Pao:",
    quiz_q6_a1: "Basic level",
    quiz_q6_a2: "Premium level",
    quiz_q6_a3: "Unlimited corporate plan",
    quiz_q7: "7. BBQs at our place are:",
    quiz_q7_a1: "The main event on Camilo’s calendar" ,
    quiz_q7_a2: "An unnecessarily large food production",
    quiz_q7_a3: "A chill Sunday plan… according to us",
    quiz_q8: "8. We decided to get married in Boyacá because:",
    quiz_q8_a1: "Tradition matters",
    quiz_q8_a2: "Family rules",
    quiz_q8_a3: "That’s where our story began",
    quiz_q9: "9. When Ale says 'just one more shot of aguardiente and that’s it', it means:",
    quiz_q9_a1: "Alright, that’s enough",
    quiz_q9_a2: "Last one and we leave",
    quiz_q9_a3: "Guaro and water",
    quiz_q10: "10. After 5 years long-distance, we learned that:",
    quiz_q10_a1: "WiFi can connect hearts too",
    quiz_q10_a2: "Miles do count… just not on Ryanair",
    quiz_q10_a3: "Love isn’t selfish, it’s patient… and together anything is possible",
    quiz_submit: "Submit answers",
    quiz_result_score: "You answered {correct} out of {total} correctly.",
    quiz_result_completion_hint: " You can complete the remaining questions for a full result.",
    quiz_result_success: " Congratulations for knowing the couple!",
    quiz_result_thanks: " Thanks for participating.",
    photo_caption: "Eight years later, still worth it.",
    footer_contact: "Questions? Email us at alecamimatri@gmail.com tel: to be defined",
    footer_credit: "Made by Cami and Ale with vibecoding 😄",
    footer_back: "Back to top",
  },
  es: {
    nav_home: "Inicio",
    nav_story: "Cuenta regresiva",
    nav_schedule: "Programa",
    nav_venue: "Lugar",
    nav_travel: "Viaje",
    nav_rolo: "Diccionario rolo",
    nav_faq: "Datos importantes",
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
    countdown_subtitle: "Falta muy poco",
    countdown_days: "Días",
    countdown_hours: "Horas",
    countdown_minutes: "Minutos",
    countdown_seconds: "Segundos",
    schedule_title: "Programa",
    schedule_ceremony: "Ceremonia",
    schedule_ceremony_time: "3:00 PM · Bosque Hotel Estelar",
    schedule_ceremony_time_only: "3:00",
    schedule_ceremony_period: "PM",
    schedule_ceremony_place: "Bosque Hotel Estelar",
    schedule_cocktail: "Cóctel",
    schedule_cocktail_time: "5:00 PM · Hotel Estelar",
    schedule_cocktail_time_only: "5:00",
    schedule_cocktail_period: "PM",
    schedule_cocktail_place: "Hotel Estelar",
    schedule_reception: "Recepción",
    schedule_reception_time: "6:00 PM · Salón Sugamuxi Hotel Estelar",
    schedule_reception_time_only: "6:00",
    schedule_reception_period: "PM",
    schedule_reception_place: "Salón Sugamuxi Hotel Estelar",
    venue_title: "Lugar",
    venue_address: "Hotel Estelar Centro de Convenciones Paipa, Boyacá - Colombia",
    venue_link: "Abrir en Google Maps",
    venue_photo_caption: "Hotel Estelar",
    travel_title: "Viaje",
    travel_intro: "Opciones de estadía y transporte para llegar a Paipa.",
    travel_hotels: "Hoteles",
        travel_hotels_subtitle: "Elige la opción que mejor se ajuste a tu estilo.",
    travel_hotel_estelar: "Hotel de la boda",
    travel_hotel_sochagota: "Resort junto al lago, a 4 km del evento",
    travel_hotel_colonial: "Estilo clásico, a 3.3 km del evento",
    travel_hotel_lanceros: "Comodidad moderna, a 3.7 km del evento",
    travel_hotel_salitre: "Retiro campestre, a 3.5 km del evento",
    travel_hotel_action: "Ver",travel_transport: "Transporte",
    travel_transport_text: "Mapa con la ruta desde Bogotá hasta Paipa.",
    rolo_title: "Diccionario rolo",
    rolo_intro:
      "Para nuestros invitados internacionales: esto no es un diccionario, es un manual de supervivencia. Rolo significa alguien de Bogotá.",
    rolo_cat_basic: "Básico",
    rolo_cat_time: "Tiempo",
    rolo_cat_social: "Social",
    rolo_cat_party: "Fiesta",
    rolo_cat_people: "Personas",
    rolo_cat_boyaca: "Boyacá",
    rolo_cat_safety: "Seguridad",
    rolo_col_expression: "Expresión",
    rolo_col_literal: "Traducción literal",
    rolo_col_meaning: "Significado real",
    rolo_col_english: "Significado en inglés",
    rolo_basic_pola_expr: "Pola",
    rolo_basic_pola_lit: "Marca de cerveza",
    rolo_basic_pola_mean: "Cerveza",
    rolo_basic_pola_en: "Beer",
    rolo_basic_guaro_expr: "Guaro",
    rolo_basic_guaro_lit: "Licor",
    rolo_basic_guaro_mean: "Aguardiente",
    rolo_basic_guaro_en: "Anise liquor shot",
    rolo_basic_tinto_expr: "Tinto",
    rolo_basic_tinto_lit: "Vino tinto",
    rolo_basic_tinto_mean: "Café negro",
    rolo_basic_tinto_en: "Black coffee",
    rolo_basic_parche_expr: "Parche",
    rolo_basic_parche_lit: "Parche",
    rolo_basic_parche_mean: "Plan/grupo",
    rolo_basic_parche_en: "Hangout",
    rolo_basic_vaca_expr: "Hacer vaca",
    rolo_basic_vaca_lit: "Hacer una vaca",
    rolo_basic_vaca_mean: "Recolectar dinero",
    rolo_basic_vaca_en: "Split the bill",
    rolo_time_ahorita_expr: "Ahorita",
    rolo_time_ahorita_lit: "Ahora mismo",
    rolo_time_ahorita_mean: "Tal vez pronto",
    rolo_time_ahorita_en: "Maybe soon",
    rolo_time_yacasi_expr: "Ya casi",
    rolo_time_yacasi_lit: "Casi ya",
    rolo_time_yacasi_mean: "Falta bastante",
    rolo_time_yacasi_en: "Not soon",
    rolo_time_cinco_expr: "En 5 minutos",
    rolo_time_cinco_lit: "En 5 minutos",
    rolo_time_cinco_mean: "20–40 minutos",
    rolo_time_cinco_en: "Not in 5 minutes",
    rolo_time_saliendo_expr: "Voy saliendo",
    rolo_time_saliendo_lit: "Estoy saliendo",
    rolo_time_saliendo_mean: "Aún en casa",
    rolo_time_saliendo_en: "Haven’t left yet",
    rolo_social_quepena_expr: "Qué pena",
    rolo_social_quepena_lit: "Qué vergüenza",
    rolo_social_quepena_mean: "Permiso/perdón",
    rolo_social_quepena_en: "Excuse me / sorry",
    rolo_social_fresco_expr: "Fresco",
    rolo_social_fresco_lit: "Fresco",
    rolo_social_fresco_mean: "Tranquilo",
    rolo_social_fresco_en: "No worries",
    rolo_social_paila_expr: "Paila",
    rolo_social_paila_lit: "Sartén",
    rolo_social_paila_mean: "Mala suerte",
    rolo_social_paila_en: "That sucks",
    rolo_social_chimba_expr: "Una chimba",
    rolo_social_chimba_lit: "Una chimba",
    rolo_social_chimba_mean: "Excelente",
    rolo_social_chimba_en: "Awesome",
    rolo_party_ronda_expr: "Otra ronda",
    rolo_party_ronda_lit: "Otra ronda",
    rolo_party_ronda_mean: "Más trago",
    rolo_party_ronda_en: "More drinks coming",
    rolo_party_ultima_expr: "La última",
    rolo_party_ultima_lit: "La última",
    rolo_party_ultima_mean: "Quedan muchas",
    rolo_party_ultima_en: "Not the last",
    rolo_party_unaynos_expr: "Una y nos vamos",
    rolo_party_unaynos_lit: "Una y nos vamos",
    rolo_party_unaynos_mean: "No nos vamos",
    rolo_party_unaynos_en: "We won’t leave",
    rolo_party_flojo_expr: "No sea flojo",
    rolo_party_flojo_lit: "No sea flojo",
    rolo_party_flojo_mean: "Baile",
    rolo_party_flojo_en: "Dance",
    rolo_people_perro_expr: "Mi perro",
    rolo_people_perro_lit: "Mi perro",
    rolo_people_perro_mean: "Amigo",
    rolo_people_perro_en: "Buddy",
    rolo_people_llave_expr: "Llave",
    rolo_people_llave_lit: "Llave",
    rolo_people_llave_mean: "Mejor amigo",
    rolo_people_llave_en: "Best friend",
    rolo_people_jefe_expr: "Jefe",
    rolo_people_jefe_lit: "Jefe",
    rolo_people_jefe_mean: "Señor",
    rolo_people_jefe_en: "Sir",
    rolo_boyaca_sumerce_expr: "Sumercé",
    rolo_boyaca_sumerce_lit: "Su merced",
    rolo_boyaca_sumerce_mean: "Usted respetuoso",
    rolo_boyaca_sumerce_en: "Polite you",
    rolo_boyaca_regaleme_expr: "Regáleme",
    rolo_boyaca_regaleme_lit: "Regáleme",
    rolo_boyaca_regaleme_mean: "Por favor deme",
    rolo_boyaca_regaleme_en: "May I have",
    rolo_boyaca_orden_expr: "A la orden",
    rolo_boyaca_orden_lit: "A la orden",
    rolo_boyaca_orden_mean: "Con gusto",
    rolo_boyaca_orden_en: "My pleasure",
    rolo_safety_papaya_expr: "No dar papaya",
    rolo_safety_papaya_lit: "No dar papaya",
    rolo_safety_papaya_mean: "No facilitar robo",
    rolo_safety_papaya_en: "Don’t make yourself an easy target",
    faq_title: "Datos importantes",
    faq_attire_q: "¿Qué debo vestir?",
    faq_attire_a:
      "Vestido Largo / Traje Formal. Ejemplos: traje formal, corbata (sin corbatín), zapatos formales. Vestido largo (color reservado: verde oliva), tacón grueso ya que la ceremonia será en zona campestre. No olvidar zapatos de cambio para poder bailar toda la noche.",
    faq_photos_q: "¿Puedo tomar fotos?",
    faq_photos_a:
      "En el momento de entrada de los novios en la ceremonia, por petición de los novios no es posible tomar fotos y/o sacar el celular.",
    rsvp_title: "RSVP",
    rsvp_text: "Agradecemos confirmar tu asistencia.",
    rsvp_name_label: "Nombre completo",
    rsvp_name_placeholder: "Escribe tu nombre y apellido",
    rsvp_lookup_button: "Buscar invitacion",
    rsvp_found_guest: "Invitado:",
    rsvp_group_title: "Invitados en esta reserva",
    rsvp_attendees_label: "Quienes asistiran",
    rsvp_attendees_hint: "Selecciona las personas de tu grupo que asistiran.",
    rsvp_attendance_label: "Asistiras?",
    rsvp_attendance_placeholder: "Selecciona una opcion",
    rsvp_attendance_yes: "Si, asistire",
    rsvp_attendance_no: "No podre asistir",
    rsvp_guests_label: "Numero de asistentes",
    rsvp_message_label: "Mensaje (opcional)",
    rsvp_message_placeholder: "Escribe un mensaje para los novios",
    rsvp_submit_button: "Enviar RSVP",
    rsvp_update_button: "Actualizar RSVP",
    rsvp_lookup_searching: "Buscando invitacion...",
    rsvp_lookup_not_found: "No encontramos tu nombre. Por favor contacta a los novios.",
    rsvp_lookup_error: "No pudimos validar tu invitacion en este momento. Intenta de nuevo.",
    rsvp_lookup_success: "Invitacion encontrada.",
    rsvp_lookup_already_confirmed:
      "Ya confirmaste tu asistencia. Puedes cambiar tu estado abajo.",
    rsvp_lookup_already_canceled:
      "Ya marcaste que no podras asistir. Puedes cambiar tu estado abajo.",
    rsvp_lookup_already_submitted: "Tu RSVP ya fue enviado. Puedes cambiar tu estado abajo.",
    rsvp_submit_sending: "Enviando tu RSVP...",
    rsvp_submit_success: "Gracias. Tu respuesta quedo guardada.",
    rsvp_submit_error: "No pudimos guardar tu RSVP. Intenta de nuevo.",
    rsvp_submit_validation_error: "Revisa tus datos antes de enviar.",
    rsvp_calendar: "Agendar en mi calendario",
    registry_title: "Regalos",
    registry_text: "Agradecemos su presencia, pero si desean contribuir estos son los datos:",
    registry_list_title: "Lista de regalos",
    registry_list_text: "Ver lista de regalos",
    registry_honeymoon_title: "Luna de miel",
    registry_honeymoon_text: "Opciones para aporte de luna de miel:",
    registry_colombia_title: "Colombia",
    registry_colombia_text: "Llave Bre-B: @camicace",
    registry_bank_title: "Paises Bajos / Europa",
    registry_link: "https://revolut.me/camiloflij",
    quiz_title: "Quiz",
    quiz_text: "Responde 10 preguntas sobre nosotros y descubre cuánto conoces a los novios.",
    quiz_button: "Empezar el quiz",
    quiz_eyebrow: "Quiz de los novios",
    quiz_page_title: "¿Cuánto nos conoces?",
    quiz_subtitle: "Responde las 10 preguntas. Si aciertas al menos 5, ¡te felicitaremos!",
    quiz_back: "Volver a la invitación",
    quiz_q1: "1. ¿En qué ciudad nos comprometimos?",
    quiz_q1_a1: "Utrecht",
    quiz_q1_a2: "Cerinza",
    quiz_q1_a3: "Budapest",
    quiz_q2: "2. ¿Cuál es nuestro coctail favorito?",
    quiz_q2_a1: "Martini",
    quiz_q2_a2: "Aperol Spritz",
    quiz_q2_a3: "Margarita",
    quiz_q3: "3. ¿Qué no puede faltar nunca en una cena en la casa?",
    quiz_q3_a1: "Agua con gas (porque ya somos viejitos)",
    quiz_q3_a2: "Coca-Cola… porque eso qué es",
    quiz_q3_a3: "Jugo de lulo — qué rico Colombia",
    quiz_q4: "4. Cuando conocemos una ciudad nueva… ¿qué buscamos primero sí o sí?",
    quiz_q4_a1: "Arquitectura y estadios",
    quiz_q4_a2: "Museos y bares (equilibrio cultural)",
    quiz_q4_a3: "Tiendas y parques",
    quiz_q5: "5. Si suena esta canción… la pista deja de ser familiar. ¿Cuál es?", 
    quiz_q5_a1: "Perdemos la elegancia", 
    quiz_q5_a2: "Se forma el círculo", 
    quiz_q5_a3: "Pa' Que Se Lo Gozen — Tego Calderón",
    quiz_q6: "6. Estadísticamente hablando, Camilo recibe Pao-Pao:",
    quiz_q6_a1: "Nivel básico",
    quiz_q6_a2: "Nivel premium",
    quiz_q6_a3: "Plan corporativo ilimitado",
    quiz_q7: "7. Los asados en nuestra casa son:",
    quiz_q7_a1: "El evento principal del calendario de Camilo",
    quiz_q7_a2: "Una producción gastronómica innecesaria",
    quiz_q7_a3: "Un plan tranquilo… según nosotros",
    quiz_q8: "8. Decidimos casarnos en Boyacá porque:",
    quiz_q8_a1: "La tradición pesa",
    quiz_q8_a2: "La familia manda",
    quiz_q8_a3: "Ahí empezó esta historia",
    quiz_q9: "9. Cuando Ale dice 'solo una copita más de guaro y ya', significa:",
    quiz_q9_a1: "Ya estuvo bueno", 
    quiz_q9_a2: "La última y nos vamos", 
    quiz_q9_a3: "Guaro y water",
    quiz_q10: "10. Después de 5 años a distancia, aprendimos que:",
    quiz_q10_a1: "El WiFi también une corazones", 
    quiz_q10_a2: "Las millas sí cuentan pero no en Ryanair",
    quiz_q10_a3: "Que el amor no es egoista, que es paciente y que si suena en conjunto, todo se puede",
    quiz_submit: "Enviar respuestas",
    quiz_result_score: "Respondiste {correct} de {total} correctamente.",
    quiz_result_completion_hint: " Puedes completar las restantes para un resultado completo.",
    quiz_result_success: " ¡Felicitaciones por conocer a los novios!",
    quiz_result_thanks: " Gracias por participar.",
    photo_caption: "Ocho años después, sigue valiendo la pena.",
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

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (dictionary[lang][key]) {
      element.setAttribute("placeholder", dictionary[lang][key]);
    }
  });

  document.querySelectorAll(".language-toggle .lang-option").forEach((option) => {
    option.classList.toggle("active", option.dataset.lang === lang);
  });
};

const setupNavigation = () => {
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
};

const setupAccordion = () => {
  const accordionButtons = document.querySelectorAll(".accordion-item");

  const collapseAccordion = () => {
    accordionButtons.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      const panel = item.nextElementSibling;
      if (panel) {
        panel.classList.remove("open");
      }
    });
  };

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      collapseAccordion();
      button.setAttribute("aria-expanded", String(!isExpanded));
      if (panel) {
        panel.classList.toggle("open", !isExpanded);
      }
    });
  });
};

const countdownValues = {
  days: document.querySelector('[data-countdown-value="days"]'),
  hours: document.querySelector('[data-countdown-value="hours"]'),
  minutes: document.querySelector('[data-countdown-value="minutes"]'),
  seconds: document.querySelector('[data-countdown-value="seconds"]'),
};

const weddingDate = new Date("2026-07-25T15:00:00-05:00");

const formatCountdownValue = (value) => String(value).padStart(2, "0");

const updateCountdown = () => {
  const now = new Date();
  const diff = weddingDate - now;
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));

  const countdownData = {
    days: Math.floor(totalSeconds / (60 * 60 * 24)),
    hours: Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)),
    minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
    seconds: totalSeconds % 60,
  };

  Object.entries(countdownData).forEach(([unit, value]) => {
    if (countdownValues[unit]) {
      countdownValues[unit].textContent = formatCountdownValue(value);
    }
  });
};

const setupCountdown = () => {
  const hasCountdown = Object.values(countdownValues).some(Boolean);
  if (!hasCountdown) {
    return;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
};

let currentLanguage = "es";

const toggleLanguage = () => {
  currentLanguage = currentLanguage === "es" ? "en" : "es";
  applyTranslations(currentLanguage);
};

const setupLanguageToggle = () => {
  applyTranslations(currentLanguage);
  if (languageToggle) {
    languageToggle.addEventListener("click", toggleLanguage);
  }
};

window.i18n = {
  dictionary,
  applyTranslations,
  getCurrentLanguage: () => currentLanguage,
};

const setupCountdownObserver = () => {
  const countdownEl = document.querySelector(".countdown");
  if (!countdownEl || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setTimeout(() => {
          countdownEl.classList.add("is-aligned");
          observer.disconnect();
        }, 200);
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(countdownEl);
};

const setupHeroParallax = () => {
  const heroContent = document.querySelector(".hero-content-inner");
  if (!heroContent) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const heroSection = document.querySelector(".hero");
  let ticking = false;

  const onScroll = () => {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(() => {
      const rect = (heroSection || heroContent).getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top, 0), window.innerHeight);
      const shift = Math.min(120, progress * 0.25);
      heroContent.style.transform = `translateY(${shift}px)`;
      ticking = false;
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
};

const setupHeroIntroAnimation = () => {
  const heroContentAnimation = document.querySelector(".hero-content");
  if (!heroContentAnimation) {
    return;
  }

  window.addEventListener("load", () => {
    heroContentAnimation.classList.add("is-animated");
  });
};

const setupBackToTop = () => {
  const backToTop = document.querySelector(".back-to-top");
  if (!backToTop) {
    return;
  }

  backToTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const setupInteractiveRsvp = () => {
  const form = document.getElementById("rsvpForm");
  const rsvpBlockEl = document.querySelector("#rsvp .rsvp-block");
  const rsvpActionsEl = document.getElementById("rsvpActions");
  const nameInput = document.getElementById("rsvpName");
  const lookupButton = document.getElementById("rsvpLookupButton");
  const statusEl = document.getElementById("rsvpStatus");
  const detailsEl = document.getElementById("rsvpDetails");
  const foundGuestEl = document.getElementById("rsvpFoundGuest");
  const attendeesListEl = document.getElementById("rsvpAttendeesList");
  const messageEl = document.getElementById("rsvpMessage");
  const submitButton = document.getElementById("rsvpSubmitButton");

  if (
    !form ||
    !nameInput ||
    !lookupButton ||
    !statusEl ||
    !rsvpBlockEl ||
    !detailsEl ||
    !foundGuestEl ||
    !attendeesListEl ||
    !messageEl ||
    !submitButton
  ) {
    return;
  }

  const apiUrl = window.RSVP_API_URL || "";
  let guestRecord = null;

  const translate = (key) => {
    const langData = dictionary[currentLanguage] || dictionary.es;
    return langData[key] || key;
  };

  const setStatus = (key, type) => {
    statusEl.textContent = translate(key);
    statusEl.dataset.state = type;
    statusEl.hidden = false;
  };

  const setSubmitButtonLabel = (key) => {
    submitButton.textContent = translate(key);
  };

  const setExpandedState = (isExpanded) => {
    rsvpBlockEl.classList.toggle("is-compact", !isExpanded);
    rsvpBlockEl.classList.toggle("is-expanded", isExpanded);
    detailsEl.classList.toggle("is-collapsed", !isExpanded);
    detailsEl.setAttribute("aria-hidden", String(!isExpanded));
    if (rsvpActionsEl) {
      rsvpActionsEl.classList.toggle("is-collapsed", !isExpanded);
      rsvpActionsEl.setAttribute("aria-hidden", String(!isExpanded));
    }
  };

  const resetLookupState = () => {
    guestRecord = null;
    foundGuestEl.textContent = "";
    attendeesListEl.innerHTML = "";
    statusEl.hidden = true;
    statusEl.textContent = "";
    statusEl.dataset.state = "";
    setSubmitButtonLabel("rsvp_submit_button");
    setExpandedState(false);
  };

  const setControlsDisabled = (isDisabled) => {
    lookupButton.disabled = isDisabled;
    submitButton.disabled = isDisabled;
  };

  const renderGuestGroup = (members) => {
    attendeesListEl.innerHTML = "";
    const list = Array.isArray(members) ? members : [];
    if (!list.length) return;

    list.forEach((member, index) => {
      const option = document.createElement("label");
      option.className = "rsvp-attendee-option";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = String(member);
      checkbox.name = `rsvpAttendee${index}`;
      checkbox.checked = true;
      option.appendChild(checkbox);
      option.appendChild(document.createTextNode(` ${String(member)}`));
      attendeesListEl.appendChild(option);
    });
  };

  const getSelectedGuests = () =>
    Array.from(attendeesListEl.querySelectorAll('input[type="checkbox"]:checked')).map(
      (input) => input.value
    );

  const applyPreviousResponse = (latestResponse) => {
    if (!latestResponse || typeof latestResponse !== "object") {
      return;
    }

    const selectedFromResponse = Array.isArray(latestResponse.selectedGuests)
      ? latestResponse.selectedGuests.map((name) => String(name).trim()).filter(Boolean)
      : [];
    const selectedSet = new Set(selectedFromResponse);
    const checkboxes = Array.from(attendeesListEl.querySelectorAll('input[type="checkbox"]'));

    if (selectedSet.size > 0) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = selectedSet.has(checkbox.value);
      });
    } else if (latestResponse.attendance === "no") {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    } else if (latestResponse.attendance === "yes") {
      const requestedCount = Number(latestResponse.guestCount);
      if (Number.isFinite(requestedCount) && requestedCount >= 0) {
        checkboxes.forEach((checkbox, index) => {
          checkbox.checked = index < requestedCount;
        });
      }
    }

    if (typeof latestResponse.message === "string" && latestResponse.message.trim()) {
      messageEl.value = latestResponse.message.trim();
    }
  };

  const postRsvp = async (payload) => {
    const formBody = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      formBody.set(key, String(value ?? ""));
    });

    const response = await fetch(apiUrl, {
      method: "POST",
      body: formBody,
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
  };

  const performLookup = async () => {
    const name = nameInput.value.trim();
    resetLookupState();

    if (!name) {
      setStatus("rsvp_submit_validation_error", "error");
      return false;
    }

    if (!apiUrl) {
      setStatus("rsvp_lookup_error", "error");
      return false;
    }

    setControlsDisabled(true);
    setStatus("rsvp_lookup_searching", "loading");
    try {
      const data = await postRsvp({ action: "lookup", name });
      if (!data || data.ok !== true) {
        setStatus("rsvp_lookup_error", "error");
        return false;
      }
      if (!data.found || !data.guest) {
        setStatus("rsvp_lookup_not_found", "error");
        return false;
      }

      guestRecord = data.guest;
      foundGuestEl.textContent = guestRecord.displayName || guestRecord.name || name;
      renderGuestGroup(guestRecord.guestGroup);
      setExpandedState(true);
      setSubmitButtonLabel("rsvp_submit_button");

      if (guestRecord.latestResponse) {
        applyPreviousResponse(guestRecord.latestResponse);
        setSubmitButtonLabel("rsvp_update_button");
        if (guestRecord.latestResponse.attendance === "yes") {
          setStatus("rsvp_lookup_already_confirmed", "success");
        } else if (guestRecord.latestResponse.attendance === "no") {
          setStatus("rsvp_lookup_already_canceled", "success");
        } else {
          setStatus("rsvp_lookup_already_submitted", "success");
        }
      } else {
        setStatus("rsvp_lookup_success", "success");
      }
      return true;
    } catch (error) {
      setStatus("rsvp_lookup_error", "error");
      return false;
    } finally {
      setControlsDisabled(false);
    }
  };

  lookupButton.addEventListener("click", async () => {
    await performLookup();
  });

  nameInput.addEventListener("keydown", async (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    await performLookup();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!guestRecord) {
      const wasFound = await performLookup();
      if (!wasFound) {
        return;
      }
    }

    const selectedGuests = getSelectedGuests();
    if (!guestRecord.guestGroup || !guestRecord.guestGroup.length) {
      setStatus("rsvp_submit_validation_error", "error");
      return;
    }

    const guestCount = selectedGuests.length;
    const attendance = guestCount > 0 ? "yes" : "no";
    if (!Number.isFinite(guestCount) || guestCount < 0) {
      setStatus("rsvp_submit_validation_error", "error");
      return;
    }

    if (!apiUrl) {
      setStatus("rsvp_submit_error", "error");
      return;
    }

    setControlsDisabled(true);
    setStatus("rsvp_submit_sending", "loading");
    try {
      const data = await postRsvp({
        action: "submit",
        inviteId: guestRecord.id || guestRecord.inviteId || "",
        guestName: guestRecord.displayName || guestRecord.name || nameInput.value.trim(),
        lookupName: nameInput.value.trim(),
        attendance,
        guestCount,
        selectedGuests: selectedGuests.join(", "),
        message: messageEl.value.trim(),
        language: currentLanguage,
        submittedAt: new Date().toISOString(),
      });

      if (!data || !data.ok) {
        if (data && data.error) {
          console.error("RSVP submit error:", data.error, data);
        }
        setStatus("rsvp_submit_error", "error");
        return;
      }

      setStatus("rsvp_submit_success", "success");
      form.reset();
      resetLookupState();
    } catch (error) {
      console.error("RSVP submit exception:", error);
      setStatus("rsvp_submit_error", "error");
    } finally {
      setControlsDisabled(false);
    }
  });
};

const setupEntrySplash = () => {
  const entrySplash = document.getElementById("entrySplash");
  const entryButton = document.getElementById("entryButton");
  const siteMain = document.querySelector(".site-main");
  if (!entrySplash || !entryButton || !siteMain) {
    return;
  }

  entryButton.addEventListener("click", () => {
    const splashImg = entryButton.querySelector("img");
    if (splashImg) {
      splashImg.classList.add("is-rotating");
    }

    const isMobile = window.matchMedia("(max-width: 600px)").matches;
    const delay = isMobile ? 650 : 250;
    setTimeout(() => {
      entrySplash.classList.add("is-hidden");
      document.body.classList.remove("splash-open");
      siteMain.classList.add("is-visible");
      siteMain.setAttribute("aria-hidden", "false");
      entrySplash.setAttribute("aria-hidden", "true");
      setTimeout(() => {
        entrySplash.style.display = "none";
      }, 450);
    }, delay);
  });
};

setupNavigation();
setupAccordion();
setupCountdown();
setupLanguageToggle();
setupCountdownObserver();
setupHeroParallax();
setupHeroIntroAnimation();
setupBackToTop();
setupInteractiveRsvp();
setupEntrySplash();


