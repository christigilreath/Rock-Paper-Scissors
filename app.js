const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
const computerScoreDisplay = document.getElementById("computer-score");
const userScoreDisplay = document.getElementById("user-score");
const gameWinnerDisplay = document.querySelector('p');

let userChoice;
let computerChoice;
let result;
let computerScore = 0;
let userScore = 0;
let gameWinner;

function clickEvent(e) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    declareWinner();
    stopGame();
} 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', clickEvent))
/* {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    declareWinner();
    stopGame();
})) */

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    if (randomNumber === 1) {
        computerChoice = "rock"
    }

    if (randomNumber === 2) {
        computerChoice = "paper"
    }

    if (randomNumber === 3) {
        computerChoice = "scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Tie";
        computerScore += 0;
        userScore += 0;
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You Win";
        userScore += 1;
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You Lose";
        computerScore += 1;
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You Lose";
        computerScore += 1;
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = "You Win";
        userScore += 1;
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = "You Lose";
        computerScore += 1;

    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You Win";
        userScore += 1;
    }
    resultDisplay.innerHTML = result;
    computerScoreDisplay.innerHTML = computerScore;
    userScoreDisplay.innerHTML = userScore;
}

function declareWinner() {
    if (userScore === 5){
        gameWinner = "You Win Game";
    }
    if (computerScore === 5) {
        gameWinner = "Computer Wins Game";
    }
gameWinnerDisplay.innerHTML = gameWinner;
}

function stopGame() {
    if (userScore === 5 || computerScore === 5)
    possibleChoices.forEach(possibleChoice => possibleChoice.removeEventListener('click', clickEvent));
}