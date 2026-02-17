const quizForm = document.querySelector(".quiz-form");
const result = document.querySelector(".quiz-result");
const quizQuestionSelector = ".quiz-question";
const checkedAnswersSelector = `${quizQuestionSelector} input:checked`;
const correctCheckedAnswerSelector = 'input[data-correct="true"]:checked';

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

const getQuizStats = () => ({
  totalQuestions: document.querySelectorAll(quizQuestionSelector).length,
  correctAnswers: document.querySelectorAll(correctCheckedAnswerSelector).length,
  answeredQuestions: document.querySelectorAll(checkedAnswersSelector).length,
});

const buildResultMessage = ({ totalQuestions, correctAnswers, answeredQuestions }) => {
  const scoreMessage = formatMessage(translate("quiz_result_score"), {
    correct: correctAnswers,
    total: totalQuestions,
  });
  const completionHint =
    answeredQuestions < totalQuestions ? translate("quiz_result_completion_hint") : "";
  const ending = correctAnswers >= 5 ? translate("quiz_result_success") : translate("quiz_result_thanks");

  return `${scoreMessage}${ending}${completionHint}`;
};

const handleQuizSubmit = (event) => {
  event.preventDefault();
  result.textContent = buildResultMessage(getQuizStats());
};

if (quizForm && result) {
  quizForm.addEventListener("submit", handleQuizSubmit);
}
