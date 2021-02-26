let computerScore = 0;
let playerScore = 0;
var randomNumber;
var computerSelection;
var playerSelection;
var roundResultText;
let itemButton = document.querySelectorAll('.button');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
    }

function computerPlay() {
    if (randomNumber === 1) {
    return "rock"
    } else if (randomNumber === 2) {
    return "paper"
    } else {
    return "scissors"
    }  
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        roundResultText = "Paper beats Rock, you lose!";       
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        roundResultText = "Rock beats Scissors, you win!";     
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        roundResultText = "Paper beats Rock, you win!";      
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        roundResultText = "Scissors beats Paper, you lose!";       
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        roundResultText = "Rock beats Scissors, you lose!";   
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        roundResultText = "Scissors beats Paper, you win!";
    }
    else if (playerSelection === computerSelection) {
        roundResultText = "Its a tie!";
    }
}

function setPlayerRock() {
    playerSelection = 'rock';
}
function setPlayerPaper() {
    playerSelection = 'paper';
}
function setPlayerScissors() {
    playerSelection = 'scissors';
}
function endGame (computerScore, playerScore) {
    if (computerScore === 5 || playerScore === 5) {
        itemButton.forEach((button) => {
            button.setAttribute('disabled', '');
        });
        document.getElementById("compPlayResult").innerHTML = "GAME OVER";
        if (computerScore > playerScore) {
            document.getElementById("roundResult").innerHTML = "YOU LOSE";
        } else {
        document.getElementById("roundResult").innerHTML = "YOU WIN!";
            }
    }
}

function fullRound() {
    
    randomNumber = getRndInteger(1, 3);

    computerSelection = computerPlay();

    playRound(playerSelection, computerSelection) ;

    document.getElementById("compPlayResult").innerHTML = ("computer chose " + computerSelection);

    document.getElementById("roundResult").innerHTML = roundResultText;

    document.getElementById("yourScore").innerHTML = ("Your Score: " + playerScore);

    document.getElementById("compScore").innerHTML = ("Computer Score: " + computerScore);

    endGame(computerScore, playerScore);

    console.log(playerScore);
    console.log(computerScore);

}

document.getElementById("buttonRock").addEventListener("click", setPlayerPaper);

document.getElementById("buttonRock").addEventListener("click", fullRound);

document.getElementById("buttonPaper").addEventListener("click", setPlayerPaper);

document.getElementById("buttonPaper").addEventListener("click", fullRound);

document.getElementById("buttonScissors").addEventListener("click", setPlayerScissors);

document.getElementById("buttonScissors").addEventListener("click", fullRound);

/* CHECKLIST
add reset switch
add button transitions
make computer play function more simple
*/