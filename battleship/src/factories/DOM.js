const Gameboard = require("./Gameboard");
const Player = require("./Player");
const Drag = require("./Drag");

const DOM = () => {
  const userBoard = Gameboard();
  const user = Player("you");
  const aiBoard = Gameboard();
  const AI = Player("computer");
  const drag = Drag(userBoard, user);
  let gameReady = false;

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
    playerBoard.classList.add("player-board");
    board.append(playerBoard);

    playerBoard.addEventListener("dragover", drag.dragOver);
    playerBoard.addEventListener("drop", drag.dropShip);

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
    directions.innerText = "Double click your ships to rotate them!";
    shipDiv.append(directions);

    user.ships.reverse().forEach((ship) => {
      const currentShip = document.createElement("div");
      currentShip.classList.add("ship");
      currentShip.setAttribute("id", ship.name);
      currentShip.draggable = true;

      currentShip.addEventListener("dragstart", drag.dragStart);
      currentShip.addEventListener("dblclick", drag.doubleClick);

      let index = 0;

      while (index < ship.length) {
        const sq = document.createElement("div");
        sq.classList.add("ship-square");
        sq.setAttribute("id", index + 1);
        currentShip.append(sq);
        index++;
      }
      shipDiv.append(currentShip);
    });

    shipDiv.addEventListener("change", (e) => {
      e.preventDefault();
      initAI();
      console.log(aiBoard.board);
    });
  }

  function initAI() {
    aiBoard.initializeBoard();

    const board = document.querySelector(".board");

    const enemyBoard = document.createElement("article");
    enemyBoard.classList.add("enemy-board");
    document.querySelector(".board").append(enemyBoard);

    aiBoard.board.forEach((num, index) => {
      const enemySquare = document.createElement("div");
      enemySquare.classList.add("square", index + 1);
      enemyBoard.append(enemySquare);
    });

    AI.ships.forEach((ship) => {
      const currentShip = document.createElement("div");
      currentShip.classList.add("ship");
      currentShip.setAttribute("id", ship.name);

      let index = 0;

      while (index < ship.length) {
        const sq = document.createElement("div");
        sq.classList.add("ship-square");
        sq.setAttribute("id", index + 1);
        currentShip.append(sq);
        index++;
      }

      const randomStartingIndex = Math.floor(
        Math.random() * aiBoard.board.length + 1
      );

      while (true) {
        aiBoard.placeShipRandomly(ship);
        if (ship.squares.length > 0) {
          break;
        }
      }
    });

    board.prepend(enemyBoard);
  }

  return { initGame };
};

module.exports = DOM;
