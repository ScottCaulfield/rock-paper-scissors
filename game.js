let playerScore = 0;
let compScore = 0;
let playerSelection;
let computerSelection;


const player = document.querySelector('#playerScore');
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector('#compScore');
computer.textContent = `Computer Score: ${compScore}`;

const textOutput = document.querySelector('.output');
textOutput.textContent = "";

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        game();
    });
});


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    var option = getRandomNumber(1, 3);

    if (option === 1) {
        return "Rock";
    } else if (option === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound() {

    if (playerSelection === "rock") {
        if (computerSelection === "Rock") {
            textOutput.textContent = "Tie!";
        } else if (computerSelection === "Paper") {
            textOutput.textContent = "You lose. Paper beats rock";
            compScore++;
        } else if (computerSelection === "Scissors") {
            textOutput.textContent = "You win. Rock beats scissors";
            playerScore++;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            textOutput.textContent = "You win. Paper beats rock";
            playerScore++;
        } else if (computerSelection === "Paper") {
            textOutput.textContent = "Tie!";
        } else if (computerSelection === "Scissors") {
            textOutput.textContent = "You lose. Scissors beats paper";
            compScore++;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "Rock") {
            textOutput.textContent = "You lose. Rock beats scissors";
            compScore++;
        } else if (computerSelection === "Paper") {
            textOutput.textContent = "You win. Scissors beats paper";
            playerScore++;
        } else if (computerSelection === "Scissors") {
            textOutput.textContent = "Tie!";
        }
    }
    
}


function game() {
    console.log(playerSelection);
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${compScore}`;

    if (playerScore === 5) {
        textOutput.textContent = "You win!";
    } else if (compScore === 5) {
        textOutput.textContent = "Computer wins!";
    }
}


