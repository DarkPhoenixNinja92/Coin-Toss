let playChoice;
let compChoiceNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let compChoice;
let compPoints = 0;
let playerPoints = 0;

function flipChoice() {
    document.getElementById("comp-choice").innerHTML = "Computer Selected: "
    if (compChoiceNum >= 1 && compChoiceNum <= 5) {
        compChoice = "Heads";
        document.getElementById("comp-choice").append(compChoice);
    } else {
        compChoice = "Tails";
        document.getElementById("comp-choice").append(compChoice);
    }
}

function playChooseHeads() {
    document.getElementById("player-choice").innerHTML = "Player Selected: "
    playChoice = "Heads";
    document.getElementById("player-choice").append(playChoice);
    if (playChoice == compChoice) {
        playerPoints += 1;
        document.getElementById("player-points").append(parseInt(playerPoints));
    }
    if (playChoice != compChoice) {
        compPoints += 1;
        document.getElementById("comp-points").append(parseInt(compPoints));
    }
    if (playerPoints == 5) {
        alert("You win!");
    }
    if (compPoints == 5) {
        alert("Sorry. You lose!");
    }
    if (playChoice == "Tails") {
        playChoice = "";
    }
}

function playChooseTails() {
    document.getElementById("player-choice").innerHTML = "Player Selected: "
    playChoice = "Tails";
    document.getElementById("player-choice").append(playChoice);
    if (playChoice == compChoice) {
        playerPoints += 1;
        document.getElementById("player-points").append(parseInt(playerPoints));
    }
    if (playChoice != compChoice) {
        compPoints += 1;
        document.getElementById("comp-points").append(parseInt(compPoints));
    }
    if (playerPoints == 5) {
        alert("You win!");
    }
    if (compPoints == 5) {
        alert("Sorry. You lose!");
    }
    if (playChoice == "Tails") {
        playChoice = "";
    }
}