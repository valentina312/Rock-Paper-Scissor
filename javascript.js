/* Function that choose a random int from interval
max and min included */
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

/* Simulate the computer random
choice of rock paper or scissors
*/

function getComputerChoice () {
    return randomIntFromInterval(1, 3);
}

/* Function  called playRound
that simulate a round
it takes as parameters playerSelection
and computerSelection and return a string
that declares the winner */


/* Function called game that calls
playRound to play 5 games with a for loop.
Every loop should prompt the user,
show the result with console log
and keep the score */


