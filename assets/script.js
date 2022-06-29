var timer = document.getElementById("timer");
var startBtn = document.getElementById("btnStart");
var startPage = document.getElementById("startPage");
var qTimer = document.getElementById("qTimer");
var questPage = document.getElementById("questContainer");
var questionOne = document.getElementById("questionOne");
var questionTwo = document.getElementById("questionTwo");
var subBtn = document.getElementById("btnSubmit");
var subBtn2 = document.getElementById("btnSubmit2");
var qRight = document.getElementById("rightQ");
var HELPHELP = document.getElementById("rightQ2");


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
};

function checkAns1() {
    if ((qRight).checked) {
        numRight++;
        alert("good job");
        console.log("amount right: " + numRight);
        questionOne.setAttribute("class","hidden");
        questionTwo.setAttribute("class","");
    } else {
        numWrong++;
        alert("wrong!")
        console.log("amount wrong: " + numWrong);
    }
};

function checkAns2() {
    if ((HELPHELP).checked) {
        numRight++;
        alert("good job");
        console.log("amount right: " + numRight);
        questionTwo.setAttribute("class","");
    } else {
        numWrong++;
        alert("wrong!")
        console.log("amount wrong: " + numWrong);
    }
};

startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    timerInt();
    startPage.setAttribute("class", "hidden");
    qTimer.setAttribute("class", "");
    questPage.setAttribute("class", "");
    questionOne.setAttribute("class", "");
});

subBtn.addEventListener("click", function(event) {
    event.preventDefault();
    checkAns1();
});

subBtn2.addEventListener("click", function(event) {
    event.preventDefault();
    checkAns2();
});