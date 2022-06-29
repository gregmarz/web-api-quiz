var timer = document.getElementById("timer");
var startBtn = document.getElementById("btnStart");
var startPage = document.getElementById("startPage");
var qTimer = document.getElementById("qTimer");
var questPage = document.getElementById("questContainer");
var questionOne = document.getElementById("questionOne");
var questionTwo = document.getElementById("questionTwo");

var subBtn = document.getElementById("btnSubmit");
var qRight = document.getElementById("rightQ");


var timeLeft = 100;
var numWrong = 0;
var numRight = 0;

function timerInt() {
    setInterval(function() {
        if (timeLeft >= 0) {
            timer.innerHTML = "Time Left: " + timeLeft;
            timeLeft--;
            return
        } else {
            if (timeLeft <=1) {
                alert("You Lose!")
                return
            }
        }
    },1000)
}

function checkAns() {
    if ((qRight).checked) {
        numRight++;
        alert("good job");
        console.log(numRight);
        questionOne.setAttribute("class","hidden");
        questionTwo.setAttribute("class","");
    } else {
        alert("wrong!")
        console.log(numWrong);
        numWrong++;
    }
}

startBtn.addEventListener("click", function() {
    timerInt();
    startPage.setAttribute("class", "hidden");
    qTimer.setAttribute("class", "");
    questPage.setAttribute("class", "");
    questionOne.setAttribute("class", "");
})

subBtn.addEventListener("click", function(event) {
     event.preventDefault();
     checkAns();
})