var timer = document.getElementById("timer");
var startBtn = document.getElementById("btnStart");
var startPage = document.getElementById("startPage");
var qTimer = document.getElementById("qTimer");
var youLost = document.getElementById("LOSELOSE");
var endPage = document.getElementById("endPage");
var questPage = document.getElementById("questContainer");
var questionOne = document.getElementById("questionOne");
var questionTwo = document.getElementById("questionTwo");
var subBtn = document.getElementById("btnSubmit");
var subBtn2 = document.getElementById("btnSubmit2");
var qRight = document.getElementById("rightQ");
var qRight2 = document.getElementById("rightQ2");
var highSchores = document.getElementById("highScores");
var appendUl = document.getElementById("highUl");
var endGame = document.getElementById("endGame"); 
var endBtn = document.getElementById("endSubmit");


var timeLeft = 60;
var timeMinus = 10;
var numWrong = 0;
var numRight = 0;

scoreList = [];

function timerInt() {
    setInterval(function() {
        if (timeLeft >= 0) {
            timer.innerHTML = "Time Left: " + timeLeft;
            timeLeft--;
        } 
        else {
            if (timeLeft <= 1) {
                questionOne.setAttribute("class","hidden");
                questionTwo.setAttribute("class","hidden");
                timer.setAttribute("class","hidden");
                endPage.setAttribute("class","");
                questPage.setAttribute("class","hidden");
                qTimer.setAttribute("class","hidden");
            }
        }
    }, 1000)
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
        timeLeft = timeLeft - timeMinus;
        alert("wrong!")
        console.log("amount wrong: " + numWrong);
    }
};

function checkAns2() {
    if ((qRight2).checked) {
        numRight++;
        alert("good job");
        questionOne.setAttribute("class","hidden");
        questionTwo.setAttribute("class","hidden");
        timer.setAttribute("class","hidden");
        endPage.setAttribute("class","");
        questPage.setAttribute("class","hidden");
        qTimer.setAttribute("class","hidden");
    } else {
        numWrong++;
        timeLeft = timeLeft - timeMinus;
        alert("wrong!")
        console.log("amount wrong: " + numWrong);
    }
};

function addScore() {
    var score = [endGame.value,(numRight-numWrong)];
    scoreList.push(score);
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}


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

endBtn.addEventListener("click",function(event) {
    event.preventDefault();
    addScore();
    for (var i = 0; i<scoreList.length; i++) {
        var scoreEl = document.createElement("li");
        scoreEl.innerHTML = scoreList[i];
        scoreEl.append(appendUl); // i literally give up on this my head is going to explode i dont even know how long i tried to work on this but i do not have the time, i might come back to it later but im about to have a mental breakdown :)
    }
});