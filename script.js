const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const gtx970 = document.getElementById('gtx970')
const nokia = document.getElementById('nokia')
const WB = document.getElementById('WB')
const playerScoreBoard = document.getElementById('PS')
const computerScoreBoard = document.getElementById('CS')
const playerOptions = ['rock', 'paper', 'scissors', 'gtx970', 'nokia']
const computerOptions = ['rock', 'paper', 'scissors', 'gtx970', 'nokia']

const choiceNumber = Math.floor(Math.random());
const computerChoice = computerOptions[choiceNumber];



function winner(player, computer) {
    let playerScore = 0;
    let computerScore = 0;
    if (player === computer) {
    WB.textContent = "It's a tie."
    }
    else if (player == 'rock') {
        if (computer == 'paper') {
            WB.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            WB.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'scissors') {
        if (computer == 'rock') {
            WB.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } 
        else {
            WB.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'paper') {
        
        if (computer == 'scissors') {
            WB.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } 
        else {
            WB.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}
