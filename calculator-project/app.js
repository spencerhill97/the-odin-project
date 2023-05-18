/*============== global variables ==============*/

let result = "";
const currentEquation = { num1: "", operator: "", num2: "" };

/*============== buttons text and class name ==============*/

const buttons = [
  { clear: "ac" },
  { modifier: "+/-" },
  { operator: "/" },
  7,
  8,
  9,
  { operator: "*" },
  4,
  5,
  6,
  { operator: "-" },
  1,
  2,
  3,
  { operator: "+" },
  0,
  { modifier: "." },
  { equals: "=" },
];

const calculator = document.createElement("section");
calculator.classList.add("calculator");
document.body.append(calculator);

/*============== screen ==============*/

const screen = document.createElement("div");
screen.classList.add("screen");
calculator.append(screen);

const currentDisplay = document.createElement("p");
currentDisplay.classList.add("currentEquation");
currentDisplay.innerText = 0;

const resultDisplay = document.createElement("p");
resultDisplay.classList.add("result");
resultDisplay.innerText = "";

screen.append(currentDisplay);
screen.append(resultDisplay);

const displayNumbers = () => {
  currentDisplay.innerText =
    currentEquation.operator == false
      ? Object.values(currentEquation).join("")
      : currentEquation.num2;

  resultDisplay.innerText =
    currentEquation.operator == false
      ? ""
      : Object.values(currentEquation).slice(0, 2).join(" ");
};

const pushNumber = (number) => {};

const displayOperator = (operator) => {
  currentEquation.operator = operator;
  displayNumbers();
};

const clearScreen = () => {
  currentEquation.num1 = "";
  currentEquation.operator = "";
  currentEquation.num2 = "";
  result = "";

  currentDisplay.innerText = 0;
  resultDisplay.innerText = "";
};

/*============== buttons ==============*/

const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");
calculator.append(btnContainer);

buttons.forEach((button) => {
  const value = typeof button === "object" && Object.values(button)[0];
  const key = typeof button === "object" && Object.keys(button)[0];
  const btn = document.createElement("button");
  btn.classList.add((key && key) || "number", "btn");
  btn.innerText = value ? value : button;
  btnContainer.append(btn);
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", (e) => {
  clearScreen();
});

const numbersBtns = document.querySelectorAll(".number");
[...numbersBtns].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    pushNumber(e.target.innerText);
  });
});

const operatorBtns = document.querySelectorAll(".operator");
[...operatorBtns].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currentEquation.operator = btn.innerText;
    displayOperator(btn.innerText);
  });
});
