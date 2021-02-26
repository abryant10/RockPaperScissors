let computerScore = 0;
let playerScore = 0;
var randomNumber;
var computerSelection;
var playerSelection;

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
        return "Paper beats Rock, you lose!";       
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "Rock beats Scissors, you win!";     
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "Paper beats Rock, you win!";      
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Scissors beats Paper, you lose!";       
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Rock beats Scissors, you lose!";   
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "Scissors beats Paper, you win!";
    }
    else if (playerSelection === computerSelection) {
        return "Its a tie!";
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

function fullRound() {
    
    randomNumber = getRndInteger(1, 3);

    computerSelection = computerPlay();

    playRound(playerSelection, computerSelection) ;

    alert("computer chose " + computerSelection); //change to in dom
    alert(playRound(playerSelection, computerSelection)); //change to in dom
}
// start loop
/* , on click starts play function. 
dsiplay round rumber
>gets random number, 
>get comp play, 
gets player play from click, 
>does play round, 
>adds one to round,
displays result
display score*/

const rockButton = document.getElementById('buttonRock');

rockButton.addEventListener("click", setPlayerRock);

rockButton.addEventListener("click", fullRound);

console.log(playerSelection);

document.getElementById("buttonPaper").addEventListener("click", setPlayerPaper);

document.getElementById("buttonPaper").addEventListener("click", fullRound);

console.log(playerSelection);

document.getElementById("buttonScissors").addEventListener("click", setPlayerScissors);

document.getElementById("buttonScissors").addEventListener("click", fullRound);



console.log(playerSelection);
console.log(round);
console.log(playerScore);
console.log(computerScore);


/* CHECKLIST

remove roounds
move alerts to page
make game end at 5 points
add add game over message
add reset switch
add button transitions
make computer play function more simple


*/