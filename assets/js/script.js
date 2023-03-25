var startButton = document.getElementById("start");
var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var answerContainer = document.getElementById("answers");
var resultsContainer = document.getElementById("score");
var currentQuestionIndex = 0;

function displayQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
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

function checkAnswer(selectedOption) {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect.");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= quizQuestions.length) {
        alert("Complete! Check your score!")
    } else {
        displayQuestion();
    }
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
];

startButton.addEventListener("click", function () {
    displayQuestion();
});


