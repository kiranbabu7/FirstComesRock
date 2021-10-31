const hand = ["rock", "paper", "scissors"];

const player = document.querySelector(".player-score");
const bot = document.querySelector(".bot-score");
const playerContainer = document.querySelector(".player-container");
const botContainer = document.querySelector(".bot-container");
const stats = document.querySelector(".status");
const playerImg = document.querySelector(".player-img");
const botImg = document.querySelector(".bot-img");
const bgColor = document.querySelector(".bg-color");

// Modal window
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const endGame = document.querySelector(".end-game");
const restart = document.querySelector(".restart");

function ShowModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", hideModal);

function computerPlay() {
  //Generates Random number between 0 and 2;
  const computerChoice = Math.trunc(Math.random() * 3);
  return hand[computerChoice];
}
const buttons = document.querySelector(".buttons");
//Logic to Declare winner of the round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  playerImg.src = `./images/${playerSelection}.png`;
  botImg.src = `images/${computerSelection}.png`;
  stats.style.color = "red";
  //User Lose cases in Rock paper Scissors will only check for lose match
  if (playerSelection === hand[0] && computerSelection === hand[1]) {
    stats.innerText = `You Lose, ${hand[1]} beats ${hand[0]}`;
    return false;
  } else if (playerSelection === hand[1] && computerSelection === hand[2]) {
    stats.innerText = `You Lose, ${hand[2]} beats ${hand[1]}`;
    return false;
  } else if (playerSelection === hand[2] && computerSelection === hand[0]) {
    stats.innerText = `You Lose, ${hand[0]} beats ${hand[2]}`;
    return false;
    //Tie case
  } else if (playerSelection === computerSelection) {
    return "tie";
    //User Will win in any other case
  } else {
    stats.style.color = "green";
    stats.innerText = `You Won this Round, ${playerSelection} beats ${computerSelection}`;
    return true;
  }
}

let playerScore = 0;
let botScore = 0;
let winner = 5;
//Game Logic
function game() {
  if (playerScore < winner || botScore < winner) {
    //let playerSelection = prompt("Enter Rock, Paper or Scissors");
    buttons.addEventListener("click", function (e) {
      let playerSelection = e.target.innerText;
      if (hand.includes(playerSelection.toLowerCase())) {
        let roundResult = playRound(playerSelection, computerPlay());
        if (roundResult == "tie") {
          stats.style.color = "blue";
          stats.innerText = `It's a Tie, Play Again`;
        } else if (roundResult) {
          playerScore++;
        } else {
          botScore++;
        }
        player.innerText = playerScore;
        bot.innerText = botScore;
      } else {
        alert("You Should only Enter : Rock, Paper or Scissors");
        round--;
      }
      if (playerScore >= winner || botScore >= winner) {
        let result = playerScore > winner ? "You Win" : "You Lose";
        console.log(endGame);
        if (playerScore >= winner) {
          bgColor.classList.add("winner");
          endGame.innerText = "YOU WON (By Luck)";
        }
        if (botScore >= winner) {
          bgColor.classList.add("loser");
          endGame.innerText = "YOU LOSE , You suck at games";
        }
        ShowModal();
      }
    });
  }
}
restart.addEventListener("click", restartGame);
function restartGame() {
  // let restart = prompt("Restart Game? (Yes or No)").toLowerCase();
  playerScore = 0;
  botScore = 0;
  player.innerText = 0;
  bot.innerText = 0;
  playerImg.src = "";
  botImg.src = "";
  bgColor.classList.remove("winner");
  bgColor.classList.remove("loser");
  stats.style.color = "black";
  hideModal();
}
game();
