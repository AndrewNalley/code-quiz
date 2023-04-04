var startButton = document.getElementById("start");
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var answerContainer = document.getElementById("answers");
var answerResultEl = document.getElementById("answer result")
var resultsContainer = document.getElementById("score");
var timerEl = document.getElementById("timer");
var showScoreButton = document.getElementById("show-score");
var clearScoreButton = document.getElementById("clear-score");
var highScores = [];
var highScoresShown = false;
var submittedInitials = [];
var currentQuestionIndex = 0;
var userAnswers = 0;
var timeLeft = 60;
var timerInterval;
var submitButtonClicked = false;
var scoresButtonClicked = false;
var highScoreAdded = false;
// Timer function ends quiz when timer is up
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
        if (timeLeft > 10 && timeLeft < 61) {
            timeLeft--;
            timerEl.textContent = "Time left: " + timeLeft;
        } else if (timeLeft > 0 && timeLeft < 11) {
            timeLeft--;
            timerEl.textContent = "TIME LEFT: " + timeLeft + " - HURRY UP!";
        } else {
            clearInterval(timerInterval);
            timerEl.textContent = "TIME IS UP";
            endQuiz();
        }
    }, 1000);
}
// Displays each answer as a button, each button is an option, checkAnswer function runs with selected option.
function displayQuestion() {
    resultsContainer.style.display = "none";
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answerContainer.innerHTML = "";
    currentQuestion.options.forEach(function (option) {
        var answerButton = document.createElement("button");
        answerButton.textContent = option;
        answerButton.addEventListener("click", function () {
            checkAnswer(option);
        });
        answerContainer.appendChild(answerButton);
    });
}
// checks to see if answer matches correct answer, if correct it increments userAnswers by 1. If incorrect, it deducts 10 seconds from the timer. When questions run out, the test ends.
function checkAnswer(selectedOption) {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        answerResultEl.textContent = "Correct!";
        userAnswers++;
    } else {
        answerResultEl.textContent = "Incorrect.";
        timeLeft = timeLeft - 10;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= quizQuestions.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
}
// stops timer and clears quiz.
function endQuiz() {
    resultsContainer.style.display = "";
    answerResultEl.textContent = "Complete! Your score is: " + userAnswers + " out of " + quizQuestions.length;
    answerContainer.innerHTML = "";
    questionEl.textContent = "";
    clearInterval(timerInterval);
    // creates a form
    var formEl = document.createElement("form");
    var labelEl = document.createElement("label");
    labelEl.textContent = "Enter your initials: ";
    var inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.id = "initials";
    labelEl.appendChild(inputEl);
    formEl.appendChild(labelEl);

    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    submitButtonClicked = false;
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (!submitButtonClicked) {
            var initials = inputEl.value;
            highScore(initials, userAnswers);
            submitButtonClicked = true;
            submitButton.disabled = true;
        }
    });
    formEl.appendChild(submitButton);
    answerContainer.appendChild(formEl);
}

function highScore() {
    var initials = document.getElementById("initials").value;
    var userScore = userAnswers;
    highScores.push({ initials: initials, score: userScore });
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function showHighScores() {
    // retrieve high scores from storage
    if (!scoresButtonClicked) {
        var highScoresFromStorage = JSON.parse(localStorage.getItem("highScores"));
        if (!highScoresFromStorage) {
            questionEl.textContent = "No high scores yet!";
            return;
        };
        showScoreButton.disabled = true;
        scoresButtonClicked = true;
        // create an ordered list of high scores
        var highScoreList = document.createElement("ol");
        highScoresFromStorage.forEach(function (score) {
            var listItem = document.createElement("li");
            listItem.textContent = score.initials + " -> " + score.score;
            highScoreList.appendChild(listItem);
        });

        // append the high score list to the results container
        resultsContainer.appendChild(highScoreList);
        setTimeout(function () {
            highScoreList.style.display = "none";
            showScoreButton.disabled = false;
            scoresButtonClicked = false;
        }, 5000);
    }
}

function clearHighScores() {
    localStorage.removeItem("highScores");
    showScoreButton.disabled = false;
    scoresButtonClicked = false;
}

var quizQuestions = [
    {
        question: "How do you declare a JavaScript variable?",
        options: [
            "v ~ myVariable",
            "declare myVariable",
            "variable !",
            "var myVariable"
        ],
        correctAnswer: "var myVariable"
    },
    {
        question: "How do you insert a comment in JavaScript that has more than one line?",
        options: [
            ">> My comment here <<",
            "/* My comment here */",
            "<!-- My comment here -->",
            "{ My comment here }"
        ],
        correctAnswer: "/* My comment here */"
    },
    {
        question: "Who invented JavaScript?",
        options: [
            "Douglas Crockford",
            "Sheryl Sandberg",
            "Tim Cook",
            "Brendan Eich"
        ],
        correctAnswer: "Brendan Eich"
    },
    {
        question: "What does API stand for?",
        options: [
            "Access Program Intelligence",
            "Account Policy Interchange",
            "Application Programming Interface",
            "Actionable Portage Inference"
        ],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            "var myArray = arr{1, 2, 3}",
            "var myArray = <1, 2, 3>",
            "var myArray = [1, 2, 3]",
            "var myArray = arr(1, 2, 3)"
        ],
        correctAnswer: "var myArray = [1, 2, 3]"
    },
    {
        question: "Inside what HTML element do we put the JavaScript?",
        options: [
            "<script>",
            "<js>",
            "<javascript>",
            "<src>"
        ],
        correctAnswer: "<script>"
    },
    {
        question: "How can you add a single-line comment in a JavaScript?",
        options: [
            "// My comment here",
            "<!-- My comment here -->",
            "https:// My comment here .com",
            ">> My comment here"
        ],
        correctAnswer: "// My comment here"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: [
            "~",
            "=",
            "!",
            "#"
        ],
        correctAnswer: "="
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Data Origin Management",
            "Document Origin Management",
            "Data Object Model",
            "Document Object Model"
        ],
        correctAnswer: "Document Object Model"
    },
    {
        question: "What method turns an object into a string?",
        options: [
            "JSON.stringify",
            "JASON.string",
            "JOSN.stringit",
            "JSYN.stringy"
        ],
        correctAnswer: "JSON.stringify"
    },
];

startButton.addEventListener("click", function () {
    currentQuestionIndex = 0;
    userAnswers = 0;
    timeLeft = 60
    startTimer();
    displayQuestion();
});
// Recalls the high score list when the "show-score" VIEW HIGH SCORES button is clicked
showScoreButton.addEventListener("click", function () {
    showHighScores();
});
clearScoreButton.addEventListener("click", clearHighScores);



