const Gameboard = require("./Gameboard");
const Player = require("./Player");
const parseString = require("../utilities/parseString");

const DOM = () => {
  const currentGame = Gameboard();
  const user = Player("you");
  const cpu = Player("computer");
  const _rowLength = 10;
  console.log(currentGame.board);

  function initGame() {
    header();
    currentGame.initializeBoard();
    initBoard();
    initShips();
    // display choices
    // two player or against computer
    // player one is automatically "user";
  }

  function header() {
    const h1 = document.createElement("h1");
    h1.innerText = "Battleship";
    h1.classList.add("title");
    document.body.append(h1);
  }

  function initBoard() {
    const board = document.createElement("section");
    board.classList.add("board");

    const enemyWaters = document.createElement("article");
    enemyWaters.classList.add("enemy-waters");
    board.append(enemyWaters);

    const playerWaters = document.createElement("article");
    playerWaters.classList.add("player-waters");
    board.append(playerWaters);

    playerWaters.addEventListener("dragover", (e) => {
      e.preventDefault();
      const shipID = e.dataTransfer.getData("text/plain");
      e.dataTransfer.dropEffect = "move";
    });

    playerWaters.addEventListener("drop", (e) => {
      e.preventDefault();

      if (Array.from(e.target.classList).includes("ship-square")) {
        return console.log("squares taken");
      }

      const shipID = e.dataTransfer.getData("text/plain");
      const droppedShip = document.getElementById(shipID);
      const checkHorizontal =
        Array.from(droppedShip.classList).includes("horizontal") === true;
      const shipLength = Number(droppedShip.lastChild.id);
      const startingIndex = parseString(e.target.classList.value);
      const checkSpace =
        startingIndex % 10 === 0 ? 0 : _rowLength - (startingIndex % 10) + 1;
      const squares = checkHorizontal
        ? Array.from(
            { length: shipLength },
            (el, index) => startingIndex + index
          )
        : Array.from(
            { length: shipLength },
            (el, index) => startingIndex + index * 10
          );

      if (checkHorizontal && checkSpace < shipLength) {
        return console.log("not enough space");
      } else if (!currentGame.checkSquares(squares)) {
        return console.log("squares unavailable");
      }

      const currentShip = user.getShip(shipID);
      droppedShip.style.position = "absolute";
      droppedShip.classList.add("placed");
      e.target.appendChild(droppedShip);

      currentGame.placeShip(currentShip, squares);
    });

    currentGame.board.forEach((num, index) => {
      const playerSquare = document.createElement("div");
      playerSquare.classList.add("square", index + 1);
      playerWaters.append(playerSquare);

      const enemySquare = document.createElement("div");
      enemySquare.classList.add("square", index + 1);
      enemyWaters.append(enemySquare);
    });

    document.body.append(board);
  }

  function initShips() {
    const shipDiv = document.createElement("section");
    shipDiv.classList.add("ship-div");
    document.body.append(shipDiv);

    user.ships.forEach((ship) => {
      const ship1 = document.createElement("div");
      ship1.classList.add("ship");
      ship1.setAttribute("id", ship.name);
      ship1.draggable = true;

      ship1.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", ship1.id);
      });

      ship1.addEventListener("dblclick", (e) => {
        if (!Array.from(ship1.classList).includes("placed")) {
          return ship1.classList.toggle("horizontal");
        }

        const currentShip = user.getShip(ship1.id);
        const shipLength = currentShip.length;
        const checkHorizontal =
          Array.from(ship1.classList).includes("horizontal") !== true;
        const startingIndex = parseString(ship1.parentElement.classList.value);
        const checkSpace =
          startingIndex % 10 === 0 ? 0 : _rowLength - (startingIndex % 10) + 1;
        const squares = checkHorizontal
          ? Array.from(
              { length: shipLength },
              (el, index) => startingIndex + index
            )
          : Array.from(
              { length: shipLength },
              (el, index) => startingIndex + index * 10
            );

        console.log(currentGame.board);
        console.log(ship1.id);
        if (!currentGame.checkSquares(squares)) {
          return console.log("error");
        }

        ship1.classList.toggle("horizontal");
        currentGame.placeShip(currentShip, squares);
      });

      let index = 0;

      while (index < ship.length) {
        const sq = document.createElement("div");
        sq.classList.add("ship-square");
        sq.setAttribute("id", index + 1);
        ship1.append(sq);
        index++;
      }

      shipDiv.append(ship1);
    });
  }

  return { initGame };
};

module.exports = DOM;
