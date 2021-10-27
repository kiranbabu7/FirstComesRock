const hand = ["rock", "paper", "scissors"];

function computerPlay() {
  //Generates Random number between 0 and 2;
  const computerChoice = Math.trunc(Math.random() * 3);
  return hand[computerChoice];
}

//Logic to Declare winner of the round
function playRound(playerSelection, computerSelection) {
  console.log(
    `You Choose: ${playerSelection.toLowerCase()}, Bot: ${computerSelection}`
  );
  playerSelection = playerSelection.toLowerCase();

  //User Lose cases in Rock paper Scissors will only check for lose match
  if (playerSelection === hand[0] && computerSelection === hand[1]) {
    console.log(`You Lose, ${hand[1]} beats ${hand[0]}`);
    return false;
  } else if (playerSelection === hand[1] && computerSelection === hand[2]) {
    console.log(`You Lose, ${hand[2]} beats ${hand[1]}`);
    return false;
  } else if (playerSelection === hand[2] && computerSelection === hand[0]) {
    console.log(`You Lose, ${hand[0]} beats ${hand[2]}`);
    return false;
    //Tie case
  } else if (playerSelection === computerSelection) {
    return "tie";
    //User Will win in any other case
  } else {
    console.log(
      `You Won this Round, ${playerSelection} beats ${computerSelection}`
    );
    return true;
  }
}
//Game Logic
function game() {
  let playerScore = 0;
  let botScore = 0;
  for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt("Enter Rock, Paper or Scissors");
    if (hand.includes(playerSelection.toLowerCase())) {
      let roundResult = playRound(playerSelection, computerPlay());
      if (roundResult == "tie") {
        console.log(`It's a Tie, Play Again`);
      } else if (roundResult) {
        playerScore++;
      } else {
        botScore++;
      }
      console.log(`Your Score:${playerScore} | Bot Score: ${botScore}`);
    } else {
      alert("You Should only Enter : Rock, Paper or Scissors");
      round--;
    }
  }
  let result =
    playerScore > botScore
      ? "You Win"
      : playerScore == botScore
      ? "It's a Tie match"
      : "You Lose";
  console.log(result);
  restartGame();
}
function restartGame() {
  let restart = prompt("Restart Game? (Yes or No)").toLowerCase();
  if (restart == "yes") {
    game();
  }
}
game();
