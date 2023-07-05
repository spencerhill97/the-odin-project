const Gameboard = require("./Gameboard");
const Player = require("./Player");
const parseString = require("../utilities/parseString");

const DOM = () => {
  const userBoard = Gameboard();
  const user = Player("you");
  const aiBoard = Gameboard();
  const AI = Player("computer");

  const _rowLength = 10;
  const _playersTurn = user;
  const _isGameReady = false;

  function initGame() {
    header();
    userBoard.initializeBoard();
    initBoard();
    initShips();
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

    const playerBoard = document.createElement("article");
    playerBoard.classList.add("player-waters");
    board.append(playerBoard);

    playerBoard.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    });

    playerBoard.addEventListener("drop", (e) => {
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
      } else if (!userBoard.checkSquares(squares)) {
        return console.log("squares unavailable");
      }

      const currentShip = user.getShip(shipID);
      droppedShip.style.position = "absolute";
      droppedShip.classList.add("placed");
      e.target.appendChild(droppedShip);

      userBoard.placeShip(currentShip, squares);

      const shipsArray = document.querySelectorAll(".ship");

      // checking that all ships were placed to append start btn
      if (
        !Array.from(shipsArray).every((ship) =>
          Array.from(ship.classList).includes("placed")
        )
      ) {
        return;
      }

      const startBtn = document.createElement("button");
      startBtn.classList.add("btn", "start");
      startBtn.innerText = "start";
      !document.querySelector(".start.btn") &&
        document.querySelector(".ship-div").append(startBtn);

      startBtn.addEventListener("click", (e) => {
        e.preventDefault();
        shipsArray.forEach((ship) => {
          ship.removeAttribute("draggable");
          ship.classList.add("started");
        });
        initAI();
      });
    });

    userBoard.board.forEach((num, index) => {
      const playerSquare = document.createElement("div");
      playerSquare.classList.add("square", index + 1);
      playerBoard.append(playerSquare);
    });

    document.body.append(board);
  }

  function initShips() {
    const shipDiv = document.createElement("section");
    shipDiv.classList.add("ship-div");
    document.querySelector(".board").append(shipDiv);

    const title = document.createElement("h2");
    title.classList.add("directions", "title");
    title.innerText = "Place your ships!";
    shipDiv.append(title);

    const directions = document.createElement("p");
    directions.classList.add("directions");
    directions.innerText = "Double click your ship if you want to rotate it!";
    shipDiv.append(directions);

    user.ships.reverse().forEach((ship) => {
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

        if (!userBoard.checkSquares(squares, currentShip)) {
          return console.log("error");
        } else if (checkHorizontal && checkSpace < shipLength) {
          return console.log("not enough space");
        }

        ship1.classList.toggle("horizontal");
        userBoard.placeShip(currentShip, squares);
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

  function initAI() {
    aiBoard.initializeBoard();

    const board = document.querySelector(".board");
    const shipDiv = document.querySelector(".ship-div");
    shipDiv.remove();

    const enemyBoard = document.createElement("article");
    enemyBoard.classList.add("enemy-waters");
    document.querySelector(".board").append(enemyBoard);

    aiBoard.board.forEach((num, index) => {
      const playerSquare = document.createElement("div");
      playerSquare.classList.add("square", index + 1);
      enemyBoard.append(playerSquare);
    });

    board.append(enemyBoard);
  }

  return { initGame };
};

module.exports = DOM;
