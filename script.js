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
}]

function createAnswerElement(value, text) {
    return "<input type='radio' name='answer' value='" + 
               value + "'> " + text + "<br>"
}

let current = 0;
function loadQuestion(index) {
    const questionObj = questions[index];
    questionField.innerHTML = questionObj["question"];
    for(let i =0; i<questionObj["answers"].length;i++) {
        const answer = questionObj["answers"][i];
        answersField.innerHTML += createAnswerElement(i, answer);
    }
}

function correctAnswer(value) {
    const correctAnswer = questions[current]["correct"];
    return value == correctAnswer;
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
            alert("correct!");
        } else {
            alert("WRONG");
        }
    }
}

questionForm.addEventListener("submit", checkAnswer);
loadQuestion(current);




