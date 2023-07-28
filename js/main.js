const questions = [
    {
        question: "Which exercise is often considered the 'king' of all exercises?",
        answers:[
            {text:"a.Squats", correct:false},
            {text:"b.Deadlifts", correct:true},
            {text:"c.Bench presses", correct:false},
            {text:"d.Push-ups", correct:false},

        ]
    },
    {
        question: "Which type of exercise is best for building endurance?",
        answers:[
            {text:"a.High-intensity interval training (HIIT)", correct:false},
            {text:"b.Resistance training", correct:false},
            {text:"c.Yoga", correct:false},
            {text:"d.Steady-state cardio", correct:true},

        ]
    },
    {
        question: "Which type of exercise is best for building strength?",
        answers:[
            {text:"a.High-intensity interval training (HIIT)", correct:false},
            {text:"b.Resistance training", correct:true},
            {text:"c.Yoga", correct:false},
            {text:"d.Steady-state cardio", correct:false},

        ]
    },
    {
        question: "Which exercise targets the chest muscles?",
        answers:[
            {text:"a.Bicep curls", correct:false},
            {text:"b.Tricep extensions", correct:false},
            {text:"c.Lunges", correct:false},
            {text:"d.Push-ups", correct:true},

        ]
    },
    {
        question: "Which exercise targets the back muscles?",
        answers:[
            {text:"a.Deadlifts", correct:false},
            {text:"b.Bench presses", correct:false},
            {text:"c.Pull-ups", correct:true},
            {text:"d.Leg presses", correct:false},

        ]
    },
    {
        question: "Which exercise targets the core muscles?",
        answers:[
            {text:"a.Crunches", correct:true},
            {text:"b.Leg press", correct:false},
            {text:"c.Calf raises", correct:false},
            {text:"d.Shoulder press", correct:false},

        ]
    },
    {
        question: "Which exercise targets the glutes?",
        answers:[
            {text:"a.Squats", correct:true},
            {text:"b.Bicep curls", correct:false},
            {text:"c.Shoulder press", correct:false},
            {text:"d.Tricep extensions", correct:false},

        ]
    },
    {
        question: "Which exercise targets the shoulders?",
        answers:[
            {text:"a.Deadlifts", correct:false},
            {text:"b.Bench presses", correct:false},
            {text:"c.Shoulder press", correct:true},
            {text:"d.Leg presses", correct:false},

        ]
    },
    {
        question: "Which exercise targets the hamstrings?",
        answers:[
            {text:"a.Squats", correct:false},
            {text:"b.Lunges", correct:false},
            {text:"c.Leg curls", correct:true},
            {text:"d.Calf raises", correct:false},

        ]
    },
    {
        question: "Which exercise targets the biceps?",
        answers:[
            {text:"a.Tricep extensions", correct:false},
            {text:"b.Push-ups", correct:false},
            {text:"c.Deadlifts", correct:false},
            {text:"d.Bicep curls", correct:true},

        ]
    },
    {
        question: "Which pose is often called the 'king' of yoga poses?",
        answers:[
            {text:"a.Tree pose", correct:false},
            {text:"b.Downward facing dog pose", correct:false},
            {text:"c.Warrior pose", correct:false},
            {text:"d.Headstand pose", correct:true},

        ]
    },
    {
        question: "Which type of yoga focuses on breath control and meditation?",
        answers:[
            {text:"a.Hatha yoga", correct:false},
            {text:"b.Kundalini yoga", correct:false},
            {text:"c.Bhakti yoga", correct:false},
            {text:"d.Raja yoga", correct:true},

        ]
    },
    {
        question: "Which type of aerobics involves jumping and bouncing movements?",
        answers:[
            {text:"a.Step aerobics", correct:false},
            {text:"b.High-impact aerobics", correct:true},
            {text:"c.Dance aerobics", correct:false},
            {text:"d.Low-impact aerobics", correct:false},

        ]
    },
    {
        question: "What type of dance is the basis for Zumba?",
        answers:[
            {text:"a.Salsa", correct:true},
            {text:"b.Tango", correct:false},
            {text:"c.Belly dance", correct:false},
            {text:"d.Swing dance", correct:false},

        ]
    },
    {
        question: "What is the main goal of Zumba workouts?",
        answers:[
            {text:"a.To build muscle", correct:false},
            {text:"b.To improve flexibility", correct:false},
            {text:"c.To burn calories and improve cardiovascular fitness", correct:true},
            {text:"d.To reduce stress", correct:false},

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currQuestionIndex = 0;
let score =0;

function start(){
    currQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    let currQuestion = questions[currQuestionIndex];
    let questionNo = currQuestionIndex + 1;
    questionElement.innerHTML= questionNo +". "+ currQuestion.question;

        answerButton.innerHTML="";
    currQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("answer");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";

}
function resetState(){
    nextButton.style.display='none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML= `You Scored ${score} Out of ${questions.length}!`;
    nextButton.innerHTML= "Play Again";
    nextButton.style.display="block";

}

function handleNextButton(){
    currQuestionIndex++;
    if(currQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currQuestionIndex<questions.length){
        handleNextButton();

    }else{
        start();
    }

});

start();
