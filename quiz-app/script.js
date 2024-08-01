const questions = [
  {
    q: "What is 2+2?",
    a: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "23", correct: false },
      { text: "21", correct: false },
    ],
  },
  {
    q: "What is the capital of France?",
    a: [
      { text: "New York", correct: false },
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Madrid", correct: false },
    ],
  },
  {
    q: "What is the capital of Spain?",
    a: [
      { text: "New York", correct: false },
      { text: "Paris", correct: false },
      { text: "London", correct: false },
      { text: "Madrid", correct: true },
    ],
  },
  {
    q: "What is the capital of Portugal?",
    a: [
      { text: "New York", correct: false },
      { text: "Paris", correct: false },
      { text: "London", correct: false },
      { text: "Madrid", correct: true },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("nxt-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML =
    questionNo + ". " + questions[currentQuestionIndex].q;
  currentQuestion.a.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    nextQuestion();
  } else {
    startQuiz();
  }
});
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

showQuestion();
