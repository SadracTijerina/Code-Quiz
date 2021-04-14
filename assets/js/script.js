var startBtn = document.getElementById("startQuizBtn");
var timer = document.getElementById("timer");
var viewScore = document.getElementById("viewScore");
var introduction = document.getElementById("introduction");
var question = document.getElementById("question");
var answers = document.getElementById("answers");

var questionsAndAnswers = [
  {
    question: "Commonly used data types DO Not include what",
    answer: "alerts",
    choices: ["strings", "booleans", "numbers", "alerts"],
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    answer: "parentheses",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    answer: "all of the above",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    answer: "quotes",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
  },
  {
    title:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    answer: "console log",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
  },
];

var currentQuestion = 0;

function startQuiz() {
  introduction.style.display = "none";
  timer.textContent = "Time: 50";
  startBtn.style.display = "none";

  countdown();
}

// Timer that counts down from 60
function countdown() {
  var timeLeft = 50;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft >= 1) {
      timer.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timer.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);

      // End game function here
    }
  }, 1000);

  displayQuestion();
}

function displayQuestion() {
  //debugger;
  question.textContent = questionsAndAnswers[currentQuestion].question;

  let answer1 =
    "<button class='btn btn-primary btn-lg btn-block answerChoice'>" +
    questionsAndAnswers[currentQuestion].choices[0];
  let answer2 =
    "<button class='btn btn-primary btn-lg btn-block answerChoice'>" +
    questionsAndAnswers[currentQuestion].choices[1];
  let answer3 =
    "<button class='btn btn-primary btn-lg btn-block answerChoice'>" +
    questionsAndAnswers[currentQuestion].choices[2];
  let answer4 =
    "<button class='btn btn-primary btn-lg btn-block answerChoice'>" +
    questionsAndAnswers[currentQuestion].choices[3];

  answers.innerHTML =
    "<ul class='no-bullets'><li>" +
    answer1 +
    "</li><li>" +
    answer2 +
    "</li><li>" +
    answer3 +
    "</li><li>" +
    answer4 +
    "</li></ul>";
}

startBtn.addEventListener("click", startQuiz);
