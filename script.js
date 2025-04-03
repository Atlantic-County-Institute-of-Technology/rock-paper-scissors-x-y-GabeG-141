//* To "connect" JS to HTML and CSS
const choices = ['rock', 'paper', 'scissors','gtx970','nokia'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton = document.getElementById("Reset")
const choice_icons = ['👊','🤚','✂️','assets/GTX970.png','assets/nokia.png']
const playerChoice = document.getElementById('playerChoice');
const computer_choice = document.getElementById('computerChoice');
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

function updateUI(user
    )

    const choiceEmojis = {

        rock: "👊";

        paper: "🤚";

        scissors: "✂️";

        gtx970: "assets/GTX970.png";

        nokia: "assets/nokia.png";

    }

    //* Score tracker
    playerDisplay.textContent = `${playerChoice}`;
    computerDisplay.textContent = `${computerChoice}`;
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
    function updateUI(player, cpu, winner) {
        result.textContent = winner;
        
        // empty out any images stored previously
        playerChoice.innerHTML = '';
        computerChoice.innerHTML = '';
        
        // create a new image, set the source to the player's
        // choice, format the size, then append to player_choice
        let p_img = new Image();
        p_img.src = choice_icons[player-1];
        p_img.classList.add('choice_image'); 
        playerChoice.appendChild(p_img); 
    
        // create a new image, set the source to the cpu's
        // choice, format the size, then append to computer_choice
        let c_img = new Image();
        c_img.src = choice_icons[cpu-1];
        c_img.classList.add('choice_image');
        computer_choice.appendChild(c_img);
    
        player_score.innerText = player_score_val;
        computer_score.innerText = computer_score_val;
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