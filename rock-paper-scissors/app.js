const readline = require("readline-sync");

const welcomeMessage = console.log("Welcome to rock, paper, scissors!");

const choices = ["rock", "paper", "scissors"];

const computerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const gameResult = (user) => {
  const computerSelection = computerChoice();
  console.log("user: " + user + " and " + "computer: " + computerSelection);

  if (computerSelection === user) {
    return `You both chose ${user}! The game ends in a tie!`;
  } else if (computerSelection === "rock") {
    if (user === "paper") {
      gameScore.user++;
      return "You win! Paper beats rock!";
    } else {
      gameScore.computer++;
      return "You lose! Rock beats scissors!";
    }
  } else if (computerSelection === "paper") {
    if (user === "rock") {
      gameScore.computer++;
      return "You lose! Paper beats rock!";
    } else {
      gameScore.user++;
      return "You win! Scissors beats paper!";
    }
  } else if (computerSelection === "scissors") {
    if (user === "paper") {
      gameScore.computer++;
      return "You lose! Scissors beats paper!";
    } else {
      gameScore.user++;
      return "You win! Rock beats scissors!";
    }
  }
};

const gameScore = { user: 0, computer: 0 };

while (gameScore.user < 3 && gameScore.computer < 3) {
  let userChoice = readline
    .question(`Please choose rock, paper, or scissors?\n`)
    .toLowerCase();

  gameResult(userChoice);
}
