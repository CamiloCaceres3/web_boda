const quizForm = document.querySelector(".quiz-form");
const result = document.querySelector(".quiz-result");

const getLanguage = () => {
  if (window.i18n && typeof window.i18n.getCurrentLanguage === "function") {
    return window.i18n.getCurrentLanguage();
  }
  return document.documentElement.lang || "es";
};

const translate = (key) => {
  const lang = getLanguage();
  if (window.i18n && window.i18n.dictionary && window.i18n.dictionary[lang]) {
    return window.i18n.dictionary[lang][key] || key;
  }
  return key;
};

const formatMessage = (template, values) =>
  Object.entries(values).reduce(
    (acc, [name, value]) => acc.replaceAll(`{${name}}`, String(value)),
    template
  );

if (quizForm && result) {
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const totalQuestions = document.querySelectorAll(".quiz-question").length;
    const correctAnswers = document.querySelectorAll('input[data-correct="true"]:checked').length;
    const answeredQuestions = document.querySelectorAll(".quiz-question input:checked").length;

    const scoreMessage = formatMessage(translate("quiz_result_score"), {
      correct: correctAnswers,
      total: totalQuestions,
    });
    const completionHint =
      answeredQuestions < totalQuestions ? translate("quiz_result_completion_hint") : "";

    if (correctAnswers >= 5) {
      result.textContent = `${scoreMessage}${translate("quiz_result_success")}${completionHint}`;
    } else {
      result.textContent = `${scoreMessage}${translate("quiz_result_thanks")}${completionHint}`;
    }
  });
}
