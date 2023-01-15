const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const buttonChoice = document.querySelector('.randomChoice');
const para = document.querySelector('.computersChoice');
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length - 1) + 1]
}
buttonChoice.addEventListener('click', () => para.textContent = getComputerChoice());