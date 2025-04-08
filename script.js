function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let answer;
  switch (randomNumber) {
    case 0:
      answer = "rock";
      break;
    case 1:
      answer = "paper";
      break;
    case 2:
      answer = "scissors";
      break;
    default:
      break;
  }
  return answer;
}

function getHumanChoice() {
  let userInput = prompt("Choice Rock, Paper, Scissors:");
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    alert("No player wins");
    return 0;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("Human win");
    return 1;
  } else {
    alert("Computer win");
    return -1;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let index = 0; index < 5; index++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let callGame = playRound(humanSelection, computerSelection);
    switch (callGame) {
      case 1:
        humanScore += 1;
        break;
      case -1:
        computerScore += 1;
        break;
      default:
        break;
    }

    alert(`Human score is ${humanScore}, Computer score is ${computerScore}`);
  }
}

playGame();
