const gameScore = { user: 0, computer: 0 };

const choices = ["rock", "paper", "scissors"];

let randomSelection = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};
let userSelection;

const header = document.createElement("header");
document.body.append(header);

const heading = document.createElement("h1");
heading.innerText = "Welcome to rock, paper, scissors!";
heading.setAttribute(
  "style",
  "font-size: 36px; text-align: center; margin: 24px"
);

const headingSubText = document.createElement("p");
headingSubText.innerText =
  "This is a best of five game! Please choose from rock, paper, or scissors below.";
headingSubText.setAttribute(
  "style",
  "font-size: 20px; text-align: center; width: 40ch; margin: 0 auto"
);

header.append(heading);
header.append(headingSubText);

const gameContent = document.createElement("section");
gameContent.setAttribute(
  "style",
  "display: flex; flex-direction: column; align-items: center;"
);
document.body.append(gameContent);

const scoreBoard = document.createElement("div");
scoreBoard.setAttribute(
  "style",
  "display: flex; margin: 24px auto; border: black 1px solid; border-radius: 10px; width: max-content; padding: 24px auto; padding: 25px"
);
scoreBoard.classList.add("scoreBoard");
gameContent.append(scoreBoard);

const userScore = document.createElement("div");
userScore.classList.add("user", "score");
const currentUserScore = document.createElement("p");
currentUserScore.innerText = gameScore.user;
currentUserScore.setAttribute(
  "style",
  "border: 1px solid black; border-radius: 10px; padding: 20px 40px; font-size: 36px;"
);
userScore.append(currentUserScore);

const computerScore = document.createElement("div");
computerScore.classList.add("computer", "score");
userScore.classList.add("user", "score");
const currentComputerScore = document.createElement("p");
currentComputerScore.innerText = gameScore.user;
currentComputerScore.setAttribute(
  "style",
  "border: 1px solid black; border-radius: 10px; padding: 20px 40px; font-size: 36px;"
);
computerScore.append(currentComputerScore);

scoreBoard.append(userScore);
scoreBoard.append(computerScore);

const scores = document.querySelectorAll(".score");
[...scores].forEach((score) => {
  score.setAttribute(
    "style",
    "display: flex; flex-direction: column; align-items: center; justifyContent: center; width: 150px;"
  );
  const title = document.createElement("h2");
  title.setAttribute("style", "font-size: 20px; margin-bottom: 10px");
  title.innerText =
    score.classList[0].slice(0, 1).toUpperCase() + score.classList[0].slice(1);
  score.prepend(title);
});

const choicesContainer = document.createElement("div");
choicesContainer.setAttribute(
  "style",
  "display: flex; justify-content: center; gap: 30px; width: 100%; margin: 24px auto;"
);
gameContent.append(choicesContainer);

const displayWinner = document.createElement("p");
displayWinner.innerText = "";
displayWinner.setAttribute("style", "text-align: center; font-size: 24px;");
gameContent.append(displayWinner);

const gameResult = (user) => {
  const computerSelection = randomSelection();

  if (computerSelection === user) {
    displayWinner.innerText = `You both chose ${user}! The game ends in a tie!`;
  } else if (computerSelection === "rock") {
    if (user === "paper") {
      currentUserScore.innerText = ++gameScore.user;
      displayWinner.innerText = "You win! Paper beats rock!";
    } else {
      currentComputerScore.innerText = ++gameScore.computer;
      displayWinner.innerText = "You lose! Rock beats scissors!";
    }
  } else if (computerSelection === "paper") {
    if (user === "rock") {
      currentComputerScore.innerText = ++gameScore.computer;
      displayWinner.innerText = "You lose! Paper beats rock!";
    } else {
      currentUserScore.innerText = ++gameScore.user;
      displayWinner.innerText = "You win! Scissors beats paper!";
    }
  } else if (computerSelection === "scissors") {
    if (user === "paper") {
      currentComputerScore.innerText = ++gameScore.computer;
      displayWinner.innerText = "You lose! Scissors beats paper!";
    } else {
      currentUserScore.innerText = ++gameScore.user;
      displayWinner.innerText = "You win! Rock beats scissors!";
    }
  }
};

const displayGameWinner = document.createElement("p");
displayGameWinner.setAttribute(
  "style",
  "margin-top: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 24px"
);
gameContent.append(displayGameWinner);

const checkScore = () => {
  if (gameScore.user >= 5) {
    displayGameWinner.innerText = "You won the best of 5 game!";
    return true;
  } else if (gameScore.computer >= 5) {
    displayGameWinner.innerText = "You lost the best of 5 game!";
    return true;
  }

  return false;
};

const playAgain = document.createElement("button");
playAgain.innerText = "play again";
playAgain.setAttribute("style", "padding: 5px 20px; margin: 24px auto;");
playAgain.classList.toggle("hidden");
playAgain.addEventListener("click", (e) => {
  e.target.classList.toggle("hidden");
  gameScore.user = 0;
  gameScore.computer = 0;
  displayGameWinner.innerText = "";
  currentComputerScore.innerText = 0;
  currentUserScore.innerText = 0;
  displayWinner.innerText = "Time to play anothe round!";
});
gameContent.append(playAgain);

choices.forEach((choice) => {
  const btn = document.createElement("button");
  btn.innerText = choice;
  btn.setAttribute("style", "width: 100px; padding: 5px auto");
  btn.addEventListener("click", (e) => {
    userSelection = e.target.innerText;
    gameResult(userSelection);
    checkScore() && playAgain.classList.remove("hidden");
  });
  choicesContainer.append(btn);
});
