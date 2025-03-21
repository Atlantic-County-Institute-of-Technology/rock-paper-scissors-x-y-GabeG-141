const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const gtx970 = document.getElementById('gtx970')
const nokia = document.getElementById('nokia')
const WB = document.getElementById('WB')
const playerScoreBoard = document.getElementById('PS')
const computerScoreBoard = document.getElementById('CS')
const playerChoice = ['rock', 'paper', 'scissors', 'gtx970', 'nokia']
const computerOpt = ['rock', 'paper', 'scissors', 'gtx970', 'nokia']

const choiceNumber = Math.floor(Math.random() * 5);
const computerChoice = computerOpt[choiceNumber];

function unhideF() {
        const list = document.getElementById('rockD').classList;
        list.add("unhideF");
      }


if (playerOptions === computerOptions) {
    return
}

