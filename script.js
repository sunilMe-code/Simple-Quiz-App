const questions = [
  {
    question: "What is HTML?",
    answers: ["Frontend Language", "Markup Language", "Database", "Server"],
    correct: 1
  },
   {
    question: "Which is JavaScript?",
    answers: ["Frontend Language", "Styling Tool", "Database", "None"],
    correct: 0
  },
  {
    question: "What is CSS used for?",
    answers: ["Logic", "Structure", "Styling", "Database"],
    correct: 2
  },
  {
    question: "What is HTML used for?",
    answers: ["Styling", "Structure of webpage", "Database", "Animation"],
    correct: 1
  },
];

let currentQ = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  let q = questions[currentQ]
  questionEl.textContent = q.question;

  options.forEach((opt, index) => {
    opt.textContent = q.answers[index];
    opt.classList.remove("correct", "wrong");
    opt.disabled = false;
  });

  options.forEach((opt, index) => {
    opt.addEventListener("click", () => {
      let correctIndex = questions[currentQ].correct;

      if (index === correctIndex) {
        opt.classList.add("correct");
      } else {
        opt.classList.add("wrong");
        options[correctIndex].classList.add("correct");
      }

      options.forEach(op => op.disabled = true);
    });
  });

};


  nextBtn.addEventListener("click", () => {
    currentQ++;
    
    if (currentQ < questions.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz Finished 🎉";
      document.querySelector(".options").innerHTML = "";
      nextBtn.style.display = "none";
    };

  });


loadQuestion();