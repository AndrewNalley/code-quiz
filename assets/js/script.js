var quizContainer = document.getElementById("quiz-container");
var resultsContainer = document.getElementById("score");
var questionsEl = document.getElementById("question");
var answersEl = document.getElementById("answers")
var currentQuestionIndex = 0;

function displayQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.textContent = currentQuestion.question;
    answersEl.innerHTML = "";
    currentQuestion.answers.forEach(function (answer) {
        var button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", function () {
            checkAnswer(answer);
        });
        answersEl.appendChild(button);
    });
}

var quizQuestions = [
    {
        question: "How do you declare a JavaScript variable?",
        answers: {
            a: "v ~ myVariable",
            b: "declare myVariable",
            c: "variable !",
            d: "var myVariable"
        },
        correctAnswer: "d"
    },
    {
        question: "How do you insert a comment in JavaScript that has more than one line?",
        answers: {
            a: ">> My comment here <<",
            b: "/* My comment here */",
            c: "<!-- My comment here -->",
            d: "{ My comment here }"
        },
        correctAnswer: "b"
    },
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Tim Cook",
            d: "Brendan Eich"
        },
        correctAnswer: "d"
    },
    {
        question: "What does API stand for?",
        answers: {
            a: "Access Program Intelligence",
            b: "Account Policy Interchange",
            c: "Application Programming Interface",
            d: "Actionable Portage Inference"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            a: "var myArray = arr{1, 2, 3}",
            b: "var myArray = <1, 2, 3>",
            c: "var myArray = [1, 2, 3]",
            d: "var myArray = arr(1, 2, 3)"
        },
        correctAnswer: "c"
    },
    {
        question: "Inside what HTML element do we put the JavaScript?",
        answers: {
            a: "<script>",
            b: "<js>",
            c: "<javascript>",
            d: "<src>"
        },
        correctAnswer: "a"
    },
    {
        question: "How can you add a single-line comment in a JavaScript?",
        answers: {
            a: "// My comment here",
            b: "<!-- My comment here -->",
            c: "https:// My comment here .com",
            d: ">> My comment here"
        },
        correctAnswer: "a"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: {
            a: "~",
            b: "=",
            c: "!",
            d: "#"
        },
        correctAnswer: "b"
    },
    {
        question: "What does DOM stand for?",
        answers: {
            a: "Data Origin Management",
            b: "Document Origin Management",
            c: "Data Object Model",
            d: "Document Object Model"
        },
        correctAnswer: "d"
    },
];


