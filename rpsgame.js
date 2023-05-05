function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

console.log(getComputerChoice());

const result = document.getElementById("result");
const playerScoreElem = document.getElementById("playerScoreElem");
const computerScoreElem = document.getElementById("computerScoreElem");
const endResultElem = document.getElementById("endResultElem");

let playerScore = 0;
let computerScore = 0;

function checkForWinner() {
    if (playerScore === 5) {
        endResultElem.textContent = "Player Wins!";
        disableButtons();
    } else if (computerScore === 5) {
        endResultElem.textContent = "Computer Wins!";
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors") {
        if (playerSelection === computerSelection) {
            result.textContent = `"It's a Tie! ${playerSelection} equals ${computerSelection}.`;
        } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
            playerScore++;
            playerScoreElem.textContent = `${playerScore}`;
        }
        else {
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
            computerScoreElem.textContent = `${computerScore}`;
        }
    } 
    checkForWinner()
}

const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener("click", function chooseRock() {
    playRound(playerSelection = "Rock", computerSelection = getComputerChoice());
});

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener("click", function chooseScissors() {
    playRound(playerSelection = "Scissors", computerSelection = getComputerChoice());
});

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener("click", function choosePaper() {
    playRound(playerSelection = "Paper", computerSelection = getComputerChoice());
});


const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElem.textContent = `${playerScore}`;
    computerScoreElem.textContent = `${computerScore}`;
    result.textContent = "Can you beat the Computer?";
    endResultElem.textContent = "The first to reach 5 Points will be declared as The Winner!";
    rockBtn.disabled = false;
    scissorsBtn.disabled = false;
    paperBtn.disabled = false;
});
