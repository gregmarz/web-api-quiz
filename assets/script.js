var timer = document.querySelector("#timer");

var timeLeft = 5

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
