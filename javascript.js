/* Function that choose a random int from interval
max and min included */
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

/* Simulate the computer random
choice of rock paper or scissors
*/

function getComputerChoice () {
    let randomChoice = randomIntFromInterval(1, 3);
    let computerChoice
    if (randomChoice == 1) {
        computerChoice = 'rock';
    } else if (randomChoice == 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}


/* Function  called playRound
that simulate a round
it takes as parameters playerSelection
and computerSelection and return a string
that declares the winner */
function playRound (playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    var result;
    if (player == 'rock' && computerSelection == 'scissors') {
        result = 'p';
    } else if (player == 'scissors' && computerSelection == 'paper') {
        result = 'p';
    } else if (player == 'paper' && computerSelection == 'rock') {
        result = 'p';
    } else if (player == computerSelection) {
        result = 't';
    } else {
        result = 'c';
    }
    return result;
}


/* Function called game that calls
playRound to play 5 games with a for loop.
Every loop should prompt the user,
show the result with console log
and keep the score */
function game () {
    var playerScore = 0;
    var computerScore= 0;
    for (let i = 0; i < 5; i++) {
        let keepGoing = true;
        while (keepGoing) {
            var playerInput = (prompt('Make your choice. Write rock, paper or scissors.')).toLowerCase();
            if (playerInput == 'rock' || playerInput == 'paper' || playerInput == 'scissor') {
                keepGoing = false;
            }
        }
        let computer = getComputerChoice();
        let round = playRound(playerInput, computer);
        console.log(playerInput);
        console.log(computer);
        if (round == 'p') {
            console.log(`You win, ${playerInput} beats ${computer}.`);
            playerScore++;
        } else if (round == 't') {
            console.log('It\'s a tie, play again');
        } else {
            console.log(`You lose. ${computer} beats ${playerInput}`);
            computerScore++;
        }   
    }
    if (playerScore > computerScore) {
        return 'Congratulations! You win.';
    } else if (playerScore == computerScore) {
        return 'It\'s a tie!';
    } else {
        return 'Oh no, you lost! Try again.';
    }
}

console.log(game());
