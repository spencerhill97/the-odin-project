/*============== color functionality ==============*/

const gridBackground = "#D3D3D3";
let initialColor = "black";
let pencilActive = false;

const randomColor = () => {
  function randomNumber() {
    return Math.floor(Math.random() * 256);
  }

  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
};

/*============== comment ==============*/

const instructionsContainer = document.createElement("section");
instructionsContainer.classList.add("instructionsContainer");

document.body.append(instructionsContainer);

const pencilStatus = document.createElement("span");
pencilStatus.innerText = "PENCIL STATUS";
pencilStatus.classList.add("pencilStatus");

const instructions = document.createElement("p");
instructions.innerText =
  "To draw on the Etch-A-Sketch you have to click on the board. \
   The pencil status will be green if the pen is active and will be red if the pen is inactive. \
   Change the number of squares that are rendered on the canvas to change teh width of the pencil. \
   The buttons on the left will change the color of the pencil, use the eraser, or clear the canvas.";
instructions.classList.add("instructions");

instructionsContainer.append(pencilStatus);
instructionsContainer.append(instructions);

/*============== header ==============*/

const header = document.createElement("header");
header.classList.add("header");

const title = document.createElement("h1");
title.classList.add("title");
title.innerText = "Etch-A-Sketch";

header.append(title);

/*============== main board ==============*/

const board = document.createElement("section");
board.classList.add("board");
document.body.append(board);

board.append(header);

const grid = document.createElement("article");
grid.classList.add("grid");
grid.setAttribute("style", `background-color: ${gridBackground}`);
grid.addEventListener("click", (e) => {
  pencilActive = pencilActive ? false : true;
  pencilStatus.setAttribute(
    "style",
    `background-color: ${pencilActive ? "green" : "red"}`
  );
});
board.addEventListener("mouseleave", (e) => {
  pencilActive = false;
  pencilStatus.setAttribute("style", `background-color: red`);
});

board.append(grid);

const generateNumOfSquares = (count = 16) => {
  const numOfSquares = Number(count) * Number(count);
  let index = 0;
  grid.innerHTML = "";

  while (index < numOfSquares) {
    const div = document.createElement("div");
    div.setAttribute(
      "style",
      `width: 100%; height: 100%; background-color: ${gridBackground}`
    );
    div.classList.add("square");
    const collection = document.querySelectorAll(".square");

    grid.append(div);
    index++;
  }
};

generateNumOfSquares();

/*============== button functionality ==============*/

const form = document.createElement("form");
form.classList.add("formSquareCount");

const label = document.createElement("label");
label.setAttribute("for", "numOfSquares");
label.innerText = "Number of squares:";

const squareCount = document.createElement("p");
squareCount.classList.add("squareCount");
squareCount.innerText = "16";

const squareCountInput = document.createElement("input");
squareCountInput.setAttribute("type", "range");
squareCountInput.setAttribute("name", "numOfSquares");
squareCountInput.setAttribute("value", "16");
squareCountInput.setAttribute("min", "16");
squareCountInput.setAttribute("max", "100");
squareCountInput.addEventListener("change", (e) => {
  generateNumOfSquares(e.target.value);
  squareCount.innerText = e.target.value;
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${e.target.value}, 1fr); \
     grid-template-rows: repeat(${e.target.value}, 1fr);`
  );
});

form.append(label);
form.append(squareCount);
form.append(squareCountInput);

const funcContainer = document.createElement("section");
funcContainer.classList.add("funcContainer");
document.body.append(funcContainer);

const clearAllBtn = document.createElement("button");
clearAllBtn.classList.add("clear", "btn");
clearAllBtn.innerText = "clear";
clearAllBtn.addEventListener("click", () => {
  pencilActive = false;
  const squares = document.querySelectorAll(".square");
  [...squares].forEach((square) =>
    square.setAttribute("style", `background-color: ${gridBackground};`)
  );
});

const initialColorBtn = document.createElement("button");
initialColorBtn.classList.add("random", "btn");
initialColorBtn.innerText = "black";
initialColorBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  [...squares].forEach((square) =>
    square.addEventListener("mouseover", (e) => {
      pencilActive &&
        e.target.setAttribute("style", `background-color: ${initialColor}`);
    })
  );
});

const randomColorBtn = document.createElement("button");
randomColorBtn.classList.add("black", "btn");
randomColorBtn.innerText = "random";
randomColorBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  [...squares].forEach((square) =>
    square.addEventListener("mouseover", (e) => {
      pencilActive &&
        e.target.setAttribute("style", `background-color: ${randomColor()};`);
    })
  );
});

const eraserBtn = document.createElement("button");
eraserBtn.classList.add("black", "btn");
eraserBtn.innerText = "eraser";
eraserBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  [...squares].forEach((square) =>
    square.addEventListener("mouseover", (e) => {
      pencilActive &&
        e.target.setAttribute("style", `background-color: ${gridBackground};`);
    })
  );
});

funcContainer.append(form);
funcContainer.append(clearAllBtn);
funcContainer.append(eraserBtn);
funcContainer.append(initialColorBtn);
funcContainer.append(randomColorBtn);
