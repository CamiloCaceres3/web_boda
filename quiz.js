const quizForm = document.querySelector(".quiz-form");
const result = document.querySelector(".quiz-result");

if (quizForm && result) {
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const totalQuestions = document.querySelectorAll(".quiz-question").length;
    const correctAnswers = document.querySelectorAll('input[data-correct="true"]:checked').length;
    const answeredQuestions = document.querySelectorAll(".quiz-question input:checked").length;

    const scoreMessage = `Respondiste ${correctAnswers} de ${totalQuestions} correctamente.`;
    const completionHint =
      answeredQuestions < totalQuestions ? " Puedes completar las restantes para un resultado completo." : "";

    if (correctAnswers >= 5) {
      result.textContent = `${scoreMessage} ¡Felicitaciones por conocer a los novios!${completionHint}`;
    } else {
      result.textContent = `${scoreMessage} Gracias por participar.${completionHint}`;
    }
  });
}
