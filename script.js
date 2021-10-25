const hand = ["rock", "paper", "scissors"];

function computerPlay() {
  const computerChoice = Math.trunc(Math.random() * 3);
  return hand[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  console.log(`You Choose: ${playerSelection}, Bot: ${computerSelection}`);
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === hand[0] && computerSelection === hand[1]) {
    console.log(`You Lose, ${hand[0]} beats ${hand[1]}`);
    return false;
  } else if (playerSelection === hand[1] && computerSelection === hand[2]) {
    console.log(`You Lose, ${hand[1]} beats ${hand[2]}`);
    return;
  } else if (playerSelection === hand[2] && computerSelection === hand[0]) {
    console.log(`You Lose, ${hand[2]} beats ${hand[0]}`);
    return false;
  } else if (playerSelection === computerSelection) {
    console.log(`It's a Tie, Play Again`);
    return "tie";
  } else {
    console.log(
      `You Won this Round, ${playerSelection} beats ${computerSelection}`
    );
    return true;
  }
}

function game() {
  let playerScore = 0;
  let botScore = 0;
  for (round = 1; round <= 5; round++) {
    let roundTie = "tie";
    let playerSelection = prompt("Enter Rock, Paper or Scissors");
    if (hand.includes(playerSelection)) {
      let roundResult = playRound(playerSelection, computerPlay());
      if (roundTie == "tie") {
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
  let result = playerScore > botScore ? "You Win" : "You Lose";
  console.log(result);
}
game();
