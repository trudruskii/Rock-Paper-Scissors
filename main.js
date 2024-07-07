function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const humanChoice = prompt('Please choose rock, paper, or scissors')

    if (choices.includes(humanChoice)) {
        return humanChoice
    } else {
        alert('Invalid choice. Please choose rock, paper, or scissors.')
        return getHumanChoice()
    }
}

function playGame(onGameEnd) {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()

    // Display human and computer choices in console
    console.log('Human Choice:', humanChoice)
    console.log('Computer Choice:', computerChoice)

    // Determine the winner based on choices
    let resultMessage = ''
    if (humanChoice === computerChoice) {
        resultMessage = 'It\'s a tie! Both chose ' + humanChoice + '.'
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = 'Human wins! ' + humanChoice + ' beats ' + computerChoice + '.'
    } else {
        resultMessage = 'Computer wins! ' + computerChoice + ' beats ' + humanChoice + '.'
    }

    // Show result and ask to play again
    const playAgain = confirm(resultMessage + '\n\nDo you want to play again?');
    if (playAgain) {
        playGame(onGameEnd); // Recursive call to play again
    } else {
        if (typeof onGameEnd === 'function') {
            onGameEnd(humanChoice, computerChoice); // Execute callback function after final game
        }
    }
}

// Example usage: calling playGame with a callback function
playGame(function(humanChoice, computerChoice) {
    console.log('Game ended. Human Choice:', humanChoice, 'Computer Choice:', computerChoice); // Optional callback action
})
