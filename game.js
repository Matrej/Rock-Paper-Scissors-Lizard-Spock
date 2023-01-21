const choices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
const buttonChoice = document.querySelector('.randomChoice');
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
        alert(`You chose: ${playerSelection}, computer chose: ${computerSelection}.
        You rock! (I mean you win in this game!). SCORE: ${playerScore} : ${computerScore}`);
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'PAPER') ||
        (playerSelection === 'LIZARD' && computerSelection === 'LIZARD') ||
        (playerSelection === 'SPOCK' && computerSelection === 'SPOCK')
        ) {
            alert(`You chose: ${playerSelection}, computer chose: ${computerSelection}.
            It's a DRAW! Try your luck next time! SCORE: ${playerScore} : ${computerScore}`);
    } else if(isMisstyped(playerSelection)) {
        alert(`You misstyped the choice, try again`);
    } else {
        computerScore++;
        alert(`You chose: ${playerSelection}, computer chose: ${computerSelection}.
        You LOSE! Try your luck next time! SCORE: ${playerScore} : ${computerScore}`);
    }
}
function isMisstyped(playerSelection) {
    return (choices.every(item => item !== playerSelection)) ? true : false;
}

function gameOn() {
    for (let index = 0; index < 5; index++) {
        playRound(prompt('write your selection'),getComputerChoice());
    }
    score.textContent = `SCORE: ${playerScore} : ${computerScore}`;
    buttonReset.disabled = false;
    buttonChoice.disabled = true;
}

buttonChoice.addEventListener('click', gameOn);

buttonReset.addEventListener('click', function resetGame() {
    playerScore = 0;
    computerScore = 0;
    score.textContent = `SCORE: ${playerScore} : ${computerScore}`;
    buttonChoice.disabled = false;
    buttonReset.disabled = true;
});