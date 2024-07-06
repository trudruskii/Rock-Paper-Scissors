
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice(humanChoice) {
   prompt('Please choose rock, paper, or scissors');
   if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
       return humanChoice;
   }
}