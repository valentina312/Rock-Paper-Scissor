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
        return 'p';
    } else if (player == 'scissors' && computerSelection == 'paper') {
        return 'p';
    } else if (player == 'paper' && computerSelection == 'rock') {
        return 'p';
    } else if (player == computerSelection) {
        return 't';
    } else {
        return 'c';
    }
}


/* Function called game that calls
playRound to play 5 games with a for loop.
Every loop should prompt the user,
show the result with console log
and keep the score */
function game () {
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt('Make your choice. Write rock, paper or scissors.');
        let computer = getComputerChoice();
        let playerScore;
        let computerScore;
        playRound(playerInput, computer);
        if (playRound == 'p') {
            console.log(`You win, ${playerInput} beats ${computer}.`);
            ++playerScore;
        } else if (playRound == 't') {
            console.log('It\'s a tie, play again');
        } else {
            console.log(`You lose. ${computer} beats ${playerInput}`);
            ++computerScore;
        }   
    }
    if (playerScore > computerScore) {
        return 'Congratulations! You win.';
    } else {
        return 'Oh no, you lost! Try again.';
    }
}


