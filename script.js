const questionForm = document.getElementById("question-form");
const answersField = document.getElementById("answers");
const submitBtn = document.getElementById("submit-btn");
const questionField = document.getElementById("question");
const banner = document.getElementById("banner");

const questions = [{
    "question": "what is your favourite color?",
    "answers":[
        "triangle",
        "january",
        "blue",
        "an unladen swallow"
    ],
    "correct": 1
}, {
    "question": "what is your quest?",
    "answers":[
        "I want a big mac",
        "I just like round animals",
        "I seek the holy grail",
        "I..uh...what?"
    ],
    "correct": 1
}]

function createAnswerElement(value, text) {
    return "<input type='radio' name='answer' value='" + 
               value + "'> " + text + "<br>"
}

let current = 0;
let score = 0;
function loadQuestion(index) {
    const questionObj = questions[index];
    answerField.innerHTML = "";
    questionField.innerHTML = questionObj["question"];
    for(let i =0; i<questionObj["answers"].length;i++) {
        const answer = questionObj["answers"][i];
        answersField.innerHTML += createAnswerElement(i, answer);
    }
}

function endQuiz() {
    let result = score + "/" + questions.length;
    questionField.innerHTML = "";
    answersField.innerHTML = "";
    banner.innerHTML = "Your score is: " + resul;
}

function correctAnswer(value) {
    const correctAnswer = questions[current]["correct"];
    return value === correctAnswer;
}

function checkAnswer() {
    event.preventDefault();
    console.log("submitted: ");
    for (let i=0; i < this.answer.length; i++) {
        const answer = this.answer[i];
        if (!answer.checked) {
            continue;
        }

        if (correctAnswer(parseInt(answer.value))) {
            score++;
        } 
        current++;
        if (current < questions.length) {
            loadQuestion(current);
            return;
        }

        endQuiz();
    }
}

questionForm.addEventListener("submit", checkAnswer);
loadQuestion(current);




