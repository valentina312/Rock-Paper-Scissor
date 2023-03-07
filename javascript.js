var playerScore = 0;
var computerScore = 0;

// Selecting the rock paper scissor buttons
const btn = document.querySelectorAll('#choice');

// Prepare the elements that will appear on the page with the result
const newDiv = document.createElement('div');
newDiv.style.paddingTop = '20px';
const winnerPara = document.createElement('p');

// Prepare the reload button to play again
const reloadBtn = document.createElement('button');
reloadBtn.setAttribute('class', 'reload');
reloadBtn.textContent = 'Play again.'
reloadBtn.setAttribute('onClick', 'window.location.reload();')


// Disable buttons to not allow multiple fire and tilt
function disableButtons() {
    btn.forEach(elem => {
        elem.disabled = true
    })
}



function enableButtons() {
    btn.forEach(elem => elem.disabled = false);
}

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
return a string
that declares the winner
and the scores */
function playRound (playerSelection) {
    let computerSelection = getComputerChoice();
    var result  = `You chose ${playerSelection}. Computer chose ${computerSelection}.\n`;
    var scores = [];
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        result += `You win, ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else if (playerSelection == computerSelection) {
        result += `It\'s a tie. Try again`;
    
    } else {
        result += `You lose, ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    scores.push(result, playerScore, computerScore);
    return scores;
}


// Function to display scores and winner in case of one scores = 5
function displayScore (array) {
    let player = array[1];
    let computer = array[2];
    let output = array[0];

    let para = `${output}.\n Current score is: Player ${player} - Computer ${computer}.`
    newDiv.textContent = para;
    document.body.appendChild(newDiv);

    // In case of winner allow to play again by refreshing the page
    if (player == 5) {
        winnerPara.textContent = 'Game Over! You win!'
        document.body.appendChild(winnerPara);
        document.body.appendChild(reloadBtn);
    } else if (computer == 5) {
        winnerPara.textContent == 'Game Over! You lost.'
        document.body.appendChild(winnerPara);
        document.body.appendChild(reloadBtn);
    } else {
        btn.forEach( elem => setTimeout(enableButtons, 3000));
    }
}
    

/*  Listening for click on every button
and playing a round with the player selection */ 
btn.forEach( (item) => {
    item.addEventListener('click', () => {
        let playerSelect = item.getAttribute('class').toLowerCase();
        disableButtons();
        var roundResult = playRound(playerSelect);
        displayScore(roundResult);    
    })
})
