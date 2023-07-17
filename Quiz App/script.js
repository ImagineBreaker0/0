const questions = [
    {
        question: "The belief that all life is meaningless is:",
        answers:  [
            { text: "Existentialism", correct: false},
            { text: "Taoism", correct: false},
            { text: "Nihilism", correct: true},
            { text: "Stoicism", correct: false},
        ]
    },
    {
        question: "Who wrote the book 'meditations'?",
        answers:  [
            { text: "Marcus Aurelius", correct: true},
            { text: "Socrates", correct: false},
            { text: "Miyamoto Musashi", correct: false},
            { text: "Plato", correct: false},
        ]
    },
    {
        question: "What's the first philosophy?",
        answers:  [
            { text: "Ethics", correct: false},
            { text: "Stoicism", correct: false},
            { text: "metaphysics", correct: true},
            { text: "Logic", correct: false},
        ]
    },
    {
        question: "Do you have enemies?",
        answers:  [
            { text: "Everyone is my enemy", correct: false},
            { text: "I have no enemies", correct: true},
            { text: "I have a few enemies", correct: false},
            { text: "I am my own enemy", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTMl = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", answerAnswer);
        
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dateset.correct === "true"){
            buttonClassList.add("correct")
                button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();