const quizForm = document.querySelector(".quiz-form");
const result = document.querySelector(".quiz-result");
const languageToggle = document.getElementById("quizLanguageToggle");

const dictionary = {
  es: {
    quiz_eyebrow: "Quiz de los novios",
    quiz_title_main: "¿Cuánto nos conoces?",
    quiz_intro: "Responde las 10 preguntas. Si aciertas al menos 5, ¡te felicitaremos!",
    quiz_questions: "10 preguntas",
    quiz_goal: "Meta: 5 correctas",
    quiz_time: "Tiempo libre",
    quiz_back: "Volver a la invitación",
    quiz_submit: "Enviar respuestas",
    quiz_q1: "1. ¿En qué ciudad nos comprometimos?",
    quiz_q1_a1: "Cartagena",
    quiz_q1_a2: "Bogotá",
    quiz_q1_a3: "Medellín",
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
    quiz_score: (correct, total) => `Respondiste ${correct} de ${total} correctamente.`,
    quiz_completion_hint: "Puedes completar las restantes para un resultado completo.",
    quiz_congrats: "¡Felicitaciones por conocer a los novios!",
    quiz_thanks: "Gracias por participar.",
  },
  en: {
    quiz_eyebrow: "Couple quiz",
    quiz_title_main: "How well do you know us?",
    quiz_intro: "Answer the 10 questions. If you get at least 5 right, we'll celebrate you!",
    quiz_questions: "10 questions",
    quiz_goal: "Goal: 5 correct",
    quiz_time: "No time limit",
    quiz_back: "Back to the invitation",
    quiz_submit: "Submit answers",
    quiz_q1: "1. In which city did we get engaged?",
    quiz_q1_a1: "Cartagena",
    quiz_q1_a2: "Bogotá",
    quiz_q1_a3: "Medellín",
    quiz_q2: "2. What's our favorite Sunday plan?",
    quiz_q2_a1: "Shopping",
    quiz_q2_a2: "Coffee and a walk",
    quiz_q2_a3: "Movie night",
    quiz_q3: "3. Which dessert do we share the most?",
    quiz_q3_a1: "Tiramisu",
    quiz_q3_a2: "Brownie",
    quiz_q3_a3: "Ice cream",
    quiz_q4: "4. What's our dream destination?",
    quiz_q4_a1: "Italy",
    quiz_q4_a2: "Japan",
    quiz_q4_a3: "Mexico",
    quiz_q5: "5. What do we love to do while traveling?",
    quiz_q5_a1: "Beach only",
    quiz_q5_a2: "Mix adventure and local food",
    quiz_q5_a3: "Shopping",
    quiz_q6: "6. What's our favorite song?",
    quiz_q6_a1: "Song A",
    quiz_q6_a2: "Song B",
    quiz_q6_a3: "Song C",
    quiz_q7: "7. How do we like to celebrate anniversaries?",
    quiz_q7_a1: "A special dinner and a toast",
    quiz_q7_a2: "A big party",
    quiz_q7_a3: "A surprise trip",
    quiz_q8: "8. What's our must-have snack?",
    quiz_q8_a1: "Chocolate",
    quiz_q8_a2: "French fries",
    quiz_q8_a3: "Cookies",
    quiz_q9: "9. What's our favorite drink to toast with?",
    quiz_q9_a1: "Sparkling wine",
    quiz_q9_a2: "Beer",
    quiz_q9_a3: "Tropical cocktail",
    quiz_q10: "10. What can't be missing at our wedding?",
    quiz_q10_a1: "Lots of flowers",
    quiz_q10_a2: "Music to dance all night",
    quiz_q10_a3: "Fireworks",
    quiz_score: (correct, total) => `You got ${correct} out of ${total} correct.`,
    quiz_completion_hint: "You can answer the remaining questions for a full result.",
    quiz_congrats: "Congrats on knowing the couple so well!",
    quiz_thanks: "Thanks for playing.",
  },
};

const applyTranslations = (lang) => {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = dictionary[lang][key];
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll(".language-toggle .lang-option").forEach((option) => {
    option.classList.toggle("active", option.dataset.lang === lang);
  });
};

let currentLanguage = "es";
applyTranslations(currentLanguage);

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    applyTranslations(currentLanguage);
    result.textContent = "";
  });
}

if (quizForm && result) {
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const totalQuestions = document.querySelectorAll(".quiz-question").length;
    const correctAnswers = document.querySelectorAll('input[data-correct="true"]:checked').length;
    const answeredQuestions = document.querySelectorAll(".quiz-question input:checked").length;

    const scoreMessage = dictionary[currentLanguage].quiz_score(correctAnswers, totalQuestions);
    const completionHint =
      answeredQuestions < totalQuestions ? ` ${dictionary[currentLanguage].quiz_completion_hint}` : "";
    const outcomeMessage =
      correctAnswers >= 5 ? dictionary[currentLanguage].quiz_congrats : dictionary[currentLanguage].quiz_thanks;

    result.textContent = `${scoreMessage} ${outcomeMessage}${completionHint}`;
  });
}
