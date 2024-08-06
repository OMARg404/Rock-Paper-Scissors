const choices = ['rock', 'paper', 'scissors']
const playerDisplay = document.getElementById('playerDisplay')
const computerDisplay = document.getElementById('computerDisplay')
const resultDisplay = document.getElementById('resultDisplay')
let computerScoreDisplay = document.getElementById('computerScoreDisplay')
let playerScoreDisplay = document.getElementById(`playerScoreDisplay`)
let CS = 0
let PS = 0

function PlayGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = ''
    if (playerChoice === computerChoice) {
        result = 'IT IS A TIE'
    } else {
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? 'U WIN!' : 'U LOSSE!'
                break
            case 'scissors':
                result = (computerChoice === 'paper') ? 'U WIN!' : 'U LOSSE!'
                break
            case 'paper':
                result = (computerChoice === 'rock') ? 'U WIN!' : 'U LOSSE!'
                break
        }
    }
    playerDisplay.textContent = `PLAYER :` + playerChoice
    computerDisplay.textContent = 'COMPUTER :' + computerChoice
    switch (result) {
        case 'U WIN!':
            resultDisplay.style.color = 'hsl(130,84%,54%)'
            playerScoreDisplay.textContent = ++PS
            break
        case 'U LOSSE!':
            resultDisplay.style.color = 'hsl(0,84%,50%)'
            computerScoreDisplay.textContent = ++CS
            break
        case 'IT IS A TIE':
            resultDisplay.style.color = ' grey'
    }
    resultDisplay.textContent = result
}