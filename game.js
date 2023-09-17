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

function playRound(playerSelection, computerSelection) {
    var playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "Rock") {
            return "Tie!";
        } else if (computerSelection === "Paper") {
            return "You lose. Paper beats rock";
        } else if (computerSelection === "Scissors") {
            return "You win. Rock beats scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            return "You win. Paper beats rock";
        } else if (computerSelection === "Paper") {
            return "Tie!";
        } else if (computerSelection === "Scissors") {
            return "You lose. Scissors beats paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "Rock") {
            return "You lose. Rock beats scissors";
        } else if (computerSelection === "Paper") {
            return "You win. Scissors beats paper";
        } else if (computerSelection === "Scissors") {
            return "Tie!";
        }
    } 
}

function game() {
    for (i=0; i<5; i++) {
        let playerChoice = prompt("Rock, Paper, Scissors?");
        let computerChoice = getComputerChoice();

        console.log(playRound(playerChoice, computerChoice));
    }
}

game();
