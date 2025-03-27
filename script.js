//* To "connect" JS to HTML and CSS
const choices = ['rock', 'paper', 'scissors','gtx970','nokia'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton = document.getElementById("Reset")
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

    //* This decides what wins against what
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors" || computerChoice === "gtx970") ? "YOU WIN!" : "YOU LOSE!";
        break;
        case "paper":
            result = (computerChoice === "rock" || computerChoice === "nokia") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "scissors":
            result = (computerChoice === "paper" || computerChoice === "nokia") ? "YOU WIN!" : "YOU LOSE!";
            break;
            case "gtx970":
                result = (computerChoice === "paper" || computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "nokia":
                result = (computerChoice === "gtx970" || computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            }
    }
    //* Score tracker
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

resultDisplay.classList.remove("greenText", "redText");
//* Text that displays if you win / lose and it's color
    switch(result){
case "YOU WIN!":
resultDisplay.classList.add("greenText");
playerScore++;
playerScoreDisplay.textContent = playerScore;
break;
case "YOU LOSE!":
resultDisplay.classList.add("redText");
computerScore++;
computerScoreDisplay.textContent = computerScore;
break;
    }
    //* Reset button code / function
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent=0;
}
resetButton.addEventListener("click", resetGame)
}