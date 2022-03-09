function computerPlay(){
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * 3)];
}
let playerSelection = '';

const cards = document.querySelectorAll('.card')
function changeSelection(){
  playerSelection = this.getAttribute('id');

  cards.forEach(function(item){
    item.setAttribute('style', 'border: none')
  });

  this.setAttribute('style', 'border: 3px solid gold');
}
cards.forEach(function(item){
  item.addEventListener('click', changeSelection)
});


let counter = 0;
let pScore = 0;
let cScore = 0;

let round = `Round: ${counter}`;
let playerScore = `Player Score: ${pScore}`;
let computerScore = `Computer Score: ${cScore}`;

document.querySelector('.round').textContent = round;
document.querySelector('.playerScore').textContent = playerScore;
document.querySelector('.computerScore').textContent = computerScore;

const play = document.querySelector('#playRound');
const result = document.querySelector('.result');

function playRound(){
  let computerSelection = computerPlay();

  counter++;
  round = `Round: ${counter}`;
  document.querySelector('.round').textContent = round;

  if(playerSelection === computerSelection){
    result.textContent = "It's a tie!"
  }else if(
    (playerSelection === 'rock' && computerSelection === 'scissors')||
    (playerSelection === 'paper' && computerSelection === 'rock')||
    (playerSelection === 'scissors' && computerSelection === 'paper')){

      pScore++;
      playerScore = `Player Score: ${pScore}`;
      document.querySelector('.playerScore').textContent = playerScore;
      result.textContent = `${playerSelection} beats ${computerSelection}. You win the round`

    }else{
      cScore++;
      computerScore = `Computer Score: ${cScore}`;
      document.querySelector('.computerScore').textContent = computerScore;
      result.textContent = `${computerSelection} beats ${playerSelection}. You lost the round`
    }

  if(cScore === 5){
    document.querySelector('.finalResult').textContent = 'You lost the game';

    cards.forEach(function(item){
      item.setAttribute('disabled', 'true');
    })
    play.setAttribute('disabled', 'true');
    const button = document.querySelector('.playAgain')
    button.setAttribute('style', 'display: initial');
  }

  if(pScore === 5){
    document.querySelector('.finalResult').textContent = 'You won the game';

    cards.forEach(function(item){
      item.setAttribute('disabled', 'true');
    })
    play.setAttribute('disabled', 'true');
    const button = document.querySelector('.playAgain')
    button.setAttribute('style', 'display: initial');
  }

}
play.addEventListener('click', playRound)
