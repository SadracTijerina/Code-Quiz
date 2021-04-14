var startBtn = document.getElementById("startQuizBtn");
var timer = document.getElementById("timer");
var viewScore = document.getElementById("viewScore");
var introduction = document.getElementById("introduction");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var userResult = document.getElementById("user-result");
var currentQuestion = 0;
var timeLeft = 50;
var answer1;
var answer2;
var answer3;
var answer4;
var points = 0;

var questionsAndAnswers = [
  {
    question: "Commonly used data types DO Not include what",
    answer: "alerts",
    choices: ["strings", "booleans", "numbers", "alerts"],
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    answer: "parentheses",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
  },
  {
    question: "Arrays in Javascript can be used to store ____.",
    answer: "all of the above",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answer: "quotes",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
  },
  {
    question:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    answer: "console log",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
  },
];

function startQuiz() {
  introduction.style.display = "none";
  timer.textContent = "Time: 50";
  startBtn.style.display = "none";

  countdown();
}

// Timer that counts down from 60
function countdown() {
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

  answer1 =
    "<button id='choice1' class='btn btn-primary btn-lg btn-block answerChoice'>" +
    questionsAndAnswers[currentQuestion].choices[0];
  answer2 =
    "<button id='choice2' class='btn btn-primary btn-lg btn-block answerChoice'>" +
    questionsAndAnswers[currentQuestion].choices[1];
  answer3 =
    "<button id='choice3' class='btn btn-primary btn-lg btn-block answerChoice'>" +
    questionsAndAnswers[currentQuestion].choices[2];
  answer4 =
    "<button id='choice4' class='btn btn-primary btn-lg btn-block answerChoice'>" +
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

function checkAnswer(event) {
  event.preventDefault();
  var button = document.getElementById(event.target.id);
  if (
    answer1.includes(questionsAndAnswers[currentQuestion].answer) &&
    button.id === "choice1"
  ) {
    userResult.textContent = "CORRECT!";
    currentQuestion++;
    points += 10;
    displayQuestion();
  } else if (
    answer2.includes(questionsAndAnswers[currentQuestion].answer) &&
    button.id === "choice2"
  ) {
    userResult.textContent = "CORRECT!";
    currentQuestion++;
    points += 10;
    displayQuestion();
  } else if (
    answer3.includes(questionsAndAnswers[currentQuestion].answer) &&
    button.id === "choice3"
  ) {
    userResult.textContent = "CORRECT!";
    currentQuestion++;
    points += 10;
    displayQuestion();
  } else if (
    answer4.includes(questionsAndAnswers[currentQuestion].answer) &&
    button.id === "choice4"
  ) {
    userResult.textContent = "CORRECT!";
    currentQuestion++;
    points += 10;
    displayQuestion();
  } else {
    userResult.textContent = "WRONG!";
    currentQuestion++;
    timeLeft -= 10;
    points -= 6;
    displayQuestion();
  }

  //saveScore();
}
function viewScores() {}

function addScore() {
  timer.innerHTML = "";
  question.textContent("All done!");
  introduction.textContent("Your final score is: " + points);
  answer.innerHTML = "<h3>Enter initials</h3>";
}

startBtn.addEventListener("click", startQuiz);
answers.addEventListener("click", checkAnswer);
viewScore.addEventListener("click", viewScores);
