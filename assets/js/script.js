// A lot of global variables half of them being elements
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
var arrPoints = [];

//array of objects containing the question, answer and the choices the user has.
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

//This starts the quiz by removing the short paragraph describing the quiz and starting the time
function startQuiz() {
  introduction.style.display = "none";
  timer.textContent = "Time: 50";
  startBtn.style.display = "none";

  countdown();
}

// Timer that counts down from 50
function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1

    if (timeLeft < 0 || currentQuestion == 5) {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timer.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);

      // End game function here
      addScore();
    } else if (timeLeft >= 1) {
      timer.textContent = "Time: " + timeLeft;
      timeLeft--;
    }
  }, 1000);

  displayQuestion();
}

//This function is used to display the questions and answers
function displayQuestion() {
  //Displays questions
  question.textContent = questionsAndAnswers[currentQuestion].question;

  //Displays answers
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

//This function is called everytime something is pressed in answers div
function checkAnswer(event) {
  event.preventDefault();
  var button = document.getElementById(event.target.id);
  var userInitials;

  //the user at the end can press initals box but we dont want it to do anything when he does
  if (button.id === "initials") {
    return;
  }

  //if they press submit score we get the initials and saveScore function
  if (button.id === "submitScore") {
    userInitials = document.getElementById("initials");
    saveScore(userInitials);
    return;
  }

  //We are checking here the user answer and the correct answer and acting accordingly
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
}

// We are giving the user the chance to add their score
function addScore() {
  timer.innerHTML = "";
  question.textContent = "All done!";
  introduction.textContent = "Your final score is: " + points;
  introduction.style.display = "block";
  userResult.textContent = "";

  var initials =
    '<input id ="initials" type="text" name="initials" placeholder="" />';

  //var submitBtn = "<button id='submit' class='btn btn-primary >";

  answers.innerHTML =
    "<h3>Enter initials: " +
    initials +
    "</h3>" +
    '<button id="submitScore" class="btn btn-primary">SUBMIT</button>';
}

//we are saving score to cache
function saveScore(userInput) {
  console.log(userInput.value);

  var userScore = {
    initials: userInput.value,
    score: points,
  };

  arrPoints.push(userScore);

  localStorage.setItem("scores", JSON.stringify(arrPoints));
}

//Creates a table with the scores getting from the local storage, didnt have time to solve and complete this
function viewScores() {
  // var backButton;
  // var cleanScoresButton;
  // var readScores = localStorage.getItem("scores");
  // var parseScores = JSON.parse(readScores);
  // if (!parseScores) {
  //   tableEls = "<h2>No scores saved!</h2>";
  // } else {
  //   parseScores.sort(compare);
  //   var tableEls = "";
  //   parseScores.forEach((element) => {
  //     tableEls =
  //       tableEls +
  //       "<tr><td>" +
  //       element.initials +
  //       "</td><td>" +
  //       element.score +
  //       "</td></tr>";
  //   });
  // }
}

startBtn.addEventListener("click", startQuiz);
answers.addEventListener("click", checkAnswer);
viewScore.addEventListener("click", viewScores);
