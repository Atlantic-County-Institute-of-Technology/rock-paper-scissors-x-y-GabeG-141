
/* The variables from html and css being defined in js */
const choices = ['rock', 'paper', 'scissors','gtx970','nokia'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton = document.getElementById("Reset");
const choice_icons = ['assets/rock.png','assets/paper.png','assets/scissors.png','assets/GTX970.png','assets/nokia.png'];
let playerScore = 0;
let computerScore = 0;


/*Function to actually play the game */
function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";
    /*choosed what wins against what*/
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === 'scissors' || computerChoice === 'gtx970') ? "YOU WIN!" : "YOU LOSE!";
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


    
    
    playerDisplay.textContent = `PLAYER:`;
    /* setTimeout to add the "Thinking" delay also the you win / lose text used in the game */
setTimeout(() => {
    computerDisplay.textContent = `Computer:`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

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

    /* Sets the images when their respected button is clicked */
    let c_img = new Image();
    console.log(choices.indexOf(computerChoice))
    c_img.src = choice_icons[choices.indexOf(computerChoice)];
    c_img.classList.add('choice_image');
    computerDisplay.appendChild(c_img);
}, 2000);
    let p_img = new Image();
    console.log(choices.indexOf(playerChoice))
    p_img.src = choice_icons[choices.indexOf(playerChoice)];
    p_img.classList.add('choice_image');
    playerDisplay.appendChild(p_img);


/* reset scores command / code */
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent=0;
}
resetButton.addEventListener("click", resetGame)
}