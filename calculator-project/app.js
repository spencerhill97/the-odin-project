/*============== global variables ==============*/

const currentEquation = { num1: "", operator: "", num2: "", result: "" };
let activeEquation = false;
let numberToggled = false;

/*============== buttons text and class name ==============*/

const buttons = [
  { clear: "ac" },
  { negative: "+/-" },
  { operator: "÷" },
  7,
  8,
  9,
  { operator: "x" },
  4,
  5,
  6,
  { operator: "-" },
  1,
  2,
  3,
  { operator: "+" },
  0,
  { decimal: "." },
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
  const { num1, num2, operator } = currentEquation;
  currentDisplay.innerText = Number(num1);
  resultDisplay.innerText = num2 == 0 ? "" : Number(num2) + " " + operator;
};

const pushNumber = (number) => {
  currentEquation.num1 += number;
  displayNumbers();
};

const clearScreen = () => {
  currentEquation.num1 = "";
  currentEquation.operator = "";
  currentEquation.num2 = "";

  currentDisplay.innerText = "0";
  resultDisplay.innerText = "";
  activeEquation = false;
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
clearBtn.addEventListener("click", () => {
  clearScreen();
  activeEquation = false;
});

const numbersBtns = document.querySelectorAll(".number");
[...numbersBtns].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const { num1, operator } = currentEquation;
    if (activeEquation && numberToggled === false && operator === "") {
      numberToggled = true;
      currentEquation.num2 = num1;
      currentEquation.num1 = "";
    }
    pushNumber(e.target.innerText);
  });
});

function getResult() {
  const { num1, num2, operator } = currentEquation;
  switch (operator) {
    case "+":
      currentEquation.num1 = String(Number(num2) + Number(num1));
      currentEquation.num2 = "";
      currentEquation.operator = "";
      break;
    case "-":
      currentEquation.num1 = String(Number(num2) - Number(num1));
      currentEquation.num2 = "";
      currentEquation.operator = "";
      break;
    case "x":
      currentEquation.num1 = String(Number(num2) * Number(num1));
      currentEquation.num2 = "";
      currentEquation.operator = "";
      break;
    case "÷":
      currentEquation.num1 = String(Number(num2) / Number(num1));
      currentEquation.num2 = "";
      currentEquation.operator = "";
      break;
    default:
      undefined;
  }
  activeEquation = true;
  numberToggled = false;
  displayNumbers();
}

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", getResult);

const operatorBtns = document.querySelectorAll(".operator");
[...operatorBtns].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currentEquation.operator = e.target.innerText;
    const { num1, num2, operator } = currentEquation;
    if (num2 === "") {
      currentEquation.operator = operator;
      currentEquation.num2 = num1;
      currentEquation.num1 = "";
      displayNumbers();
    } else if (num2 !== "" && activeEquation === true) {
      getResult();
    }
  });
});

/*============== modifiers ==============*/

const negativePositiveBtn = document.querySelector(".negative");
negativePositiveBtn.addEventListener("click", () => {
  const { num1 } = currentEquation;
  if (num1 == 0) {
    return;
  } else if (num1.indexOf("-") === -1) {
    currentEquation.num1 = "-" + num1;
  } else if (num1.indexOf("-") !== -1) {
    currentEquation.num1 = num1.slice(1);
  }

  displayNumbers();
});

const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", () => {
  const { num1 } = currentEquation;
  if (num1 === "" || num1 === 0) {
    currentEquation.num1 += "0.";
  } else if (num1.indexOf(".") === -1) {
    currentEquation.num1 += ".";
    return displayNumbers();
  }
});
