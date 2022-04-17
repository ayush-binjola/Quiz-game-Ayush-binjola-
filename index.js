const quiz =[
    {
        question:"Q 1 - Which of the following is correct about JavaScript?",
        a:"JavaScript is a lightweight, interpreted programming language.",
        b:"JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
        c:"The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
        d:" All of the above.",
        ans:"ans4"
    },
    {
        question:"Which of the following is the correct syntax to print a page using JavaScript?",
        a:"window.print();",
        b:"browser.print();",
        c:"navigator.print();",
        d:"document.print();",
        ans:"ans1"
    },
    {
        question:"Q 3 - Which built-in method calls a function for each element in the array?",
        a:"while()",
        b:" loop()",
        c:"forEach()",
        d:"None of the above.",
        ans:"ans3"
    },
    {
        question:"Q 4 - Which of the following code creates an object?",
        a:"var book = Object();",
        b:"var book = new Object();",
        c:"var book = new OBJECT();",
        d:"var book = new Book();",
        ans:"ans2"
    },
    {
        question:"Q 5 - Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
        a:"toSource()",
        b:"valueOf()",
        c:"toString()",
        d:"None of the above.",
        ans:"ans1"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector("#showscore");
let questionCount =0; 
let score =0;

const loadquestion = () =>
{
    const quetionlist = quiz[questionCount];
    question.innerText = quetionlist.question;
    option1.innerText = quetionlist.a;
    option2.innerText = quetionlist.b;
    option3.innerText = quetionlist.c;
    option4.innerText = quetionlist.d;

}

loadquestion();

const getCheckedAnswer = () => {
    let answer;
    answers.forEach((curAns)=>{
        if(curAns.checked){
            answer = curAns.id;
        }
    }) 
    return answer;
}

const deselectAll = () =>
{
    answers.forEach((curEle) => curEle.checked = false)
}


submit.addEventListener('click', () => {
 const checkedAnswer = getCheckedAnswer();
 if(checkedAnswer === quiz[questionCount].ans){
     score++;
 }
 questionCount++;
 deselectAll();
 if(questionCount < quiz.length){
     loadquestion();
 }
 else
 {
     const percentage = (score*100)/quiz.length;
    showscore.innerHTML = `
    <h3>Your score is ${score}/${quiz.length}</h3>
    <h3>Percentage ${percentage}%</h3>
    <button class="btn" onclick="location.reload()">Play Again</button>`;
    showscore.classList.remove('show-result');
 }
 console.log(checkedAnswer);
} );