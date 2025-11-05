const processSubmit = (answers, questions, timeLeft, navigate) => {
  const correctAnswers = Object.keys(answers).filter(
      (key) => answers[key] === questions[key].correct
  ).length;

  const incorrectAnswers = questions.length - correctAnswers;

  // ✅ Redirect to result page and pass data via state
  navigate("/Html_QResult", {
      state: {
          totalQuestions: questions.length,
          correctAnswers,
          incorrectAnswers,
          timeLeft,
      },
  });
};

export default processSubmit;
