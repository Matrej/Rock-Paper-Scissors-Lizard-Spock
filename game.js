const choices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
const buttonReset = document.querySelector('.reset');
const score = document.querySelector('.score');
const paraConclusion = document.querySelector('.conclusion');
let playerScore = 0, computerScore = 0;


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length - 1) + 1]
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'ROCK' && computerSelection === 'LIZARD') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'PAPER' && computerSelection === 'SPOCK') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'LIZARD') ||
    (playerSelection === 'LIZARD' && computerSelection === 'PAPER') ||
    (playerSelection === 'LIZARD' && computerSelection === 'SPOCK') ||
    (playerSelection === 'SPOCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SPOCK' && computerSelection === 'ROCK')
    ) {
        playerScore++;
        paraConclusion.textContent = `You chose: ${playerSelection}, computer chose: ${computerSelection}.
        You WIN this round.`;
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'PAPER') ||
        (playerSelection === 'LIZARD' && computerSelection === 'LIZARD') ||
        (playerSelection === 'SPOCK' && computerSelection === 'SPOCK')
        ) {
            paraConclusion.textContent = `You chose: ${playerSelection}, computer chose: ${computerSelection}.
            DRAW!`;
    } else {
        computerScore++;
        paraConclusion.textContent = `You chose: ${playerSelection}, computer chose: ${computerSelection}.
        LOST!`;
    }
    if (playerScore === 5) {
        score.textContent = `SCORE: ${playerScore} : ${computerScore}`;
        paraConclusion.textContent = 'CONGRATULATIONS!!!! YOU WON! You became victorious and the computer humbly kneel before you!';
        disableButtons();
        document.body.classList.add('win');
    } else if (computerScore === 5) {
        score.textContent = `SCORE: ${playerScore} : ${computerScore}`;
        paraConclusion.textContent = 'DAAAAAAAAAMN! YOU LOST! You have to serve this computer for the rest of your miserably life!';
        disableButtons();
        document.body.classList.add('loss');
    } else score.textContent = `SCORE: ${playerScore} : ${computerScore}`;
}
function disableButtons() {
    buttonChoices.forEach(button => {
        button.disabled = true;
    });
}
function enableButtons() {
    buttonChoices.forEach(button => {
        button.disabled = false;
    });
}
function resetStyles() {
    document.body.classList.remove('loss');
    document.body.classList.remove('win');
}
const buttonChoices = document.querySelectorAll('.choice');

buttonChoices.forEach(choice => choice.addEventListener('click', e => {
    playRound(e.target.id, getComputerChoice());
    buttonReset.disabled = false;
}));

buttonReset.addEventListener('click', function resetGame() {
    playerScore = 0;
    computerScore = 0;
    score.textContent = `SCORE: ${playerScore} : ${computerScore}`;
    paraConclusion.textContent = 'You need to click on one of the button choices to start a game!'
    buttonReset.disabled = true;
    enableButtons();
    resetStyles();
});

//playRound(choice.id, getComputerChoice())
/*

buttonChoice.addEventListener('click', gameOn);

function gameOn() {
    for (let index = 0; index < 5; index++) {
        playRound(prompt('write your selection'),getComputerChoice());
    }
    score.textContent = `SCORE: ${playerScore} : ${computerScore}`;
    buttonReset.disabled = false;
    buttonChoice.disabled = true;
};
*/