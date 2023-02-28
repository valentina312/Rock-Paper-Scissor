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
    if (player == 'rock' && computerSelection == 'scissors') {
        return 'You win. Rock beats scissors';
    } else if (player == 'scissors' && computerSelection == 'paper') {
        return 'You win. Scissors beats paper';
    } else if (player == 'paper' && computerSelection == 'rock') {
        return 'You win. Paper beats rock';
    } else if (player == computerSelection) {
        return 'It\'s a tie. PLay again'
    } else {
        return `You lose. ${computerSelection} beats ${player}`
    }
}

/* Function called game that calls
playRound to play 5 games with a for loop.
Every loop should prompt the user,
show the result with console log
and keep the score */


