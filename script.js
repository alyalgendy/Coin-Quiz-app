const questions = [
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true},
            { text: "Won", correct: false},
            { text: "Dollar", correct: false},
            { text: "Peso", correct: false},
        ]
    },
    {
        question: "What is the currency of Egypt?",
        answers: [
            { text: "Dirham", correct: false},
            { text: "Pound", correct: true},
            { text: "Dinar", correct: false},
            { text: "Riyal", correct: false},
        ]
    },
    {
        question: "What is the currency of Mexico?",
        answers: [
            { text: "Peso", correct: true},
            { text: "Real", correct: false},
            { text: "Lira", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Brazil?",
        answers: [
            { text: "Peso", correct: false},
            { text: "Real", correct: true},
            { text: "Cruziero", correct: false},
            { text: "Doll", correct: false},
        ]
    },
    {
        question: "What is the currency of India?",
        answers: [
            { text: "Rubee", correct: true},
            { text: "Taka", correct: false},
            { text: "Ringgit", correct: false},
            { text: "Baht", correct: false},
        ]
    },
    {
        question: "What is the currency of South Africa?",
        answers: [
            { text: "Shilling", correct: false},
            { text: "Rand", correct: true},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of United Kingdom?",
        answers: [
            { text: "Euro", correct: false},
            { text: "Pound Sterling", correct: true},
            { text: "Crown", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Canada?",
        answers: [
            { text: "Peso", correct: false},
            { text: "Dollar", correct: true},
            { text: "Loonie", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Turkey?",
        answers: [
            { text: "Lira", correct: true},
            { text: "Dinar", correct: false},
            { text: "Pound", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Russia?",
        answers: [
            { text: "Ruble", correct: true},
            { text: "Tenge", correct: false},
            { text: "Som", correct: false},
            { text: "Krona", correct: false},
        ]
    },
    {
        question: "What is the currency of Saudi Arabia?",
        answers: [
            { text: "Pound", correct: false},
            { text: "Dirham", correct: false},
            { text: "Dinar", correct: false},
            { text: "Riyal", correct: true},
        ]
    },
    {
        question: "What is the currency of China?",
        answers: [
            { text: "Won", correct: false},
            { text: "Yen", correct: false},
            { text: "Yuan", correct: true},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Switzerland?",
        answers: [
            { text: "Lira", correct: false},
            { text: "Euro", correct: false},
            { text: "Krone", correct: false},
            { text: "Franc", correct: true},
        ]
    },
    {
        question: "What is the currency of Nigeria?",
        answers: [
            { text: "Pound", correct: false},
            { text: "Shilling", correct: false},
            { text: "Naira", correct: true},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Austealia?",
        answers: [
            { text: "Peso", correct: false},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: true},
            { text: "Rand", correct: false},
        ]
    },
    {
        question: "What is the currency of Argentina?",
        answers: [
            { text: "Peso", correct: true},
            { text: "Austral", correct: false},
            { text: "Sol", correct: false},
            { text: "Cruzado", correct: false},
        ]
    },
    {
        question: "What is the currency of South Korea?",
        answers: [
            { text: "Yen", correct: false},
            { text: "Yuan", correct: false},
            { text: "Won", correct: true},
            { text: "Ringgit", correct: false},
        ]
    },
    {
        question: "What is the currency of Kenya?",
        answers: [
            { text: "Shilling", correct: true},
            { text: "Naira", correct: false},
            { text: "Rand", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Germany?",
        answers: [
            { text: "Franc", correct: false},
            { text: "Euro", correct: true},
            { text: "Mark", correct: false},
            { text: "Krone", correct: false},
        ]
    },
    {
        question: "What is the currency of France?",
        answers: [
            { text: "Franc", correct: false},
            { text: "Euro", correct: true},
            { text: "Pound", correct: false},
            { text: "Dinar", correct: false},
        ]
    },
    {
        question: "What is the currency of Italy?",
        answers: [
            { text: "Euro", correct: true},
            { text: "Lira", correct: false},
            { text: "Frank", correct: false},
            { text: "Mark", correct: false},
        ]
    },
    {
        question: "What is the currency of Spain?",
        answers: [
            { text: "Euro", correct: true},
            { text: "Lira", correct: false},
            { text: "Franc", correct: false},
            { text: "Mark", correct: false},
        ]
    },
    {
        question: "What is the currency of Sweden?",
        answers: [
            { text: "Krona", correct: true},
            { text: "Euro", correct: false},
            { text: "Franc", correct: false},
            { text: "Mark", correct: false},
        ]
    },
    {
        question: "What is the currency of Norway?",
        answers: [
            { text: "Krone", correct: true},
            { text: "Krona", correct: false},
            { text: "Euro", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Denmark?",
        answers: [
            { text: "Krone", correct: true},
            { text: "Krona", correct: false},
            { text: "Euro", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Iceland?",
        answers: [
            { text: "Krone", correct: false},
            { text: "Krona", correct: true},
            { text: "Euro", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Finland?",
        answers: [
            { text: "Euro", correct: true},
            { text: "Markka", correct: false},
            { text: "Krona", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Poland?",
        answers: [
            { text: "Zloty", correct: true},
            { text: "Euro", correct: false},
            { text: "Ruble", correct: false},
            { text: "Krona", correct: false},
        ]
    },
    {
        question: "What is the currency of Hungary?",
        answers: [
            { text: "Forint", correct: true},
            { text: "Euro", correct: false},
            { text: "Krona", correct: false},
            { text: "Ruble", correct: false},
        ]
    },
    {
        question: "What is the currency of Czech Republic?",
        answers: [
            { text: "Koruna", correct: true},
            { text: "Euro", correct: false},
            { text: "Zloty", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Greece?",
        answers: [
            { text: "Drachma", correct: false},
            { text: "Euro", correct: true},
            { text: "Franc", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Portugal?",
        answers: [
            { text: "Escudo", correct: false},
            { text: "Euro", correct: true},
            { text: "Franc", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Thailand?",
        answers: [
            { text: "Baht", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Rpiah", correct: false},
            { text: "Dong", correct: false},
        ]
    },
    {
        question: "What is the currency of Vietnam?",
        answers: [
            { text: "Dong", correct: true},
            { text: "Baht", correct: false},
            { text: "Yuan", correct: false},
            { text: "Rupiah", correct: false},
        ]
    },
    {
        question: "What is the currency of Indonesia?",
        answers: [
            { text: "Rupiah", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Rupee", correct: false},
            { text: "Dong", correct: false},
        ]
    },
    {
        question: "What is the currency of Malaysia?",
        answers: [
            { text: "Ringgit", correct: true},
            { text: "Rupiah", correct: false},
            { text: "Dollar", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Singapore?",
        answers: [
            { text: "Dollar", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Yuan", correct: false},
            { text: "Rupiah", correct: false},
        ]
    },
    {
        question: "What is the currency of Unites Arab Emirates (UAE)?",
        answers: [
            { text: "Dirham", correct: true},
            { text: "Pound", correct: false},
            { text: "Dinar", correct: false},
            { text: "Riyal", correct: false},
        ]
    },
    {
        question: "What is the currency of Iraq?",
        answers: [
            { text: "Dinar", correct: true},
            { text: "Riyal", correct: false},
            { text: "Pound", correct: false},
            { text: "Rirham", correct: false},
        ]
    },
    {
        question: "What is the currency of Iran?",
        answers: [
            { text: "Rial", correct: false},
            { text: "Toman", correct: true},
            { text: "Dirham", correct: false},
            { text: "Dinar", correct: false},
        ]
    },
    {
        question: "What is the currency of Pakistan?",
        answers: [
            { text: "Rupee", correct: true},
            { text: "Taka", correct: false},
            { text: "Dinar", correct: false},
            { text: "Ringgit", correct: false},
        ]
    },
    {
        question: "What is the currency of Bangladesh?",
        answers: [
            { text: "Rupee", correct: false},
            { text: "Taka", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Baht", correct: false},
        ]
    },
    {
        question: "What is the currency of Sri Lanka?",
        answers: [
            { text: "Taka", correct: false},
            { text: "Rupee", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Peso", correct: false},
        ]
    },
    {
        question: "What is the currency of Nepal?",
        answers: [
            { text: "Taka", correct: false},
            { text: "Rupee", correct: true},
            { text: "Dollar", correct: false},
            { text: "Yen", correct: false},
        ]
    },
    {
        question: "What is the currency of Ethiopia?",
        answers: [
            { text: "Naira", correct: false},
            { text: "Birr", correct: true},
            { text: "Shilling", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Ghana?",
        answers: [
            { text: "Cedi", correct: true},
            { text: "Naira", correct: false},
            { text: "Shilling", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Moroco?",
        answers: [
            { text: "Dirham", correct: true},
            { text: "Dinar", correct: false},
            { text: "Pound", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Algeria?",
        answers: [
            { text: "Dirham", correct: false},
            { text: "Dinar", correct: true},
            { text: "Pound", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Tunisia?",
        answers: [
            { text: "Dinar", correct: true},
            { text: "Pound", correct: false},
            { text: "Franc", correct: false},
            { text: "Rial", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerbutton = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}


function resetState(){
    nextbutton.style.display = "none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();