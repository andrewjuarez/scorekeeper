var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

var p1Score = 0;
var p2Score = 0;
var winningScore = 5;

var p1ScoreDisplay = document.getElementById("p1Score");
var p2ScoreDisplay = document.getElementById("p2Score");

p1Button.addEventListener("click", function(){
    p1Score++;
    p1ScoreDisplay.textContent = p1Score;
});

p2Button.addEventListener("click", function(){
    p2Score++;
    p2ScoreDisplay.textContent = p2Score;
});

function updateBothScores(){
    p1ScoreDisplay.textContent = p1Score;
    p2ScoreDisplay.textContent = p2Score;
}

resetButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    updateBothScores();
});

