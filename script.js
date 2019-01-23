const questionForm = document.getElementById("question-form");
const answersField = document.getElementById("answers");
const submitBtn = document.getElementById("submit-btn");
const questionField = document.getElementById("question");

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

let current = 0;
function loadQuestion(index) {
    const questionObj = questions[index];
    questionField.innerHTML = questionObj["question"];
    for(let i =0; i<questionObj["answers"].length;i++) {
        const answer = questionObj["answers"][i];
        answersField.innerHTML += "<input type='radio' name='answer' value='" + 
               i + "'> " + answer + "<br>"
    }
}
loadQuestion(current);