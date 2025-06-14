const quizData = [
  {
    question: "What is the capital city of India?",
    options: ["Mumbai", "Kolkata", "NewDelhi", "Chennai"],
    answer: "NewDelhi"
  },
  {
    question: "Who was the first Prime Minister of independent India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Lal Bahadur Shastri"],
    answer: "Jawaharlal Nehru"
  },
  {
    question: "In which year did India gain independence?",
    options: ["1945", "1947", "1950", "1962"],
    answer: "1947"
  },
  {
    question: "Which river is known as the longest river in India?",
    options: ["Yamuna", "Ganga", "Godavari", "Brahmaputra"],
    answer: "Ganga"
  },
  {
    question: "Who wrote the Indian national anthem?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subramania Bharati"],
    answer: "Rabindranath Tagore"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const question1 = document.getElementById("question");
const options1 = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const result1 = document.getElementById("result");
const score1 = document.getElementById("score");

nextBtn.disabled = true;

function loadQuestion() {
  selectedAnswer = null;
  nextBtn.disabled = true;

  const current = quizData[currentQuestion];
  question1.textContent = current.question;
  options1.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.style.margin = "5px";
    btn.style.padding = "10px 15px";
    btn.style.border = "1px solid blue";
    btn.style.borderRadius = "5px";
    btn.style.backgroundColor = "white";
    btn.style.color = "blue";
    btn.style.cursor = "pointer";

    btn.onclick = () => {
      Array.from(options1.children).forEach(childBtn => {
        childBtn.style.backgroundColor = "white";
        childBtn.style.color = "blue";
      });
      btn.style.backgroundColor = "blue";
      btn.style.color = "white";

      selectedAnswer = option;
      nextBtn.disabled = false;
    };

    options1.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  if (!selectedAnswer) return;

  if (selectedAnswer === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
};

function endQuiz() {
  document.getElementById("quiz").classList.add("hidden");
  result1.classList.remove("hidden");
  score1.textContent = `You scored ${score} out of ${quizData.length}`;
}

loadQuestion();
