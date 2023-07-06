const parseString = require("../utilities/parseString");

const Drag = (board, player) => {
  const _rowLength = 10;

  function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  function dropShip(event) {
    event.preventDefault();

    if (Array.from(event.target.classList).includes("ship-square")) {
      return console.log("squares taken");
    }

    const shipID = event.dataTransfer.getData("text/plain");
    const droppedShip = document.getElementById(shipID);
    const checkHorizontal =
      Array.from(droppedShip.classList).includes("horizontal") === true;
    const shipLength = Number(droppedShip.lastChild.id);
    const startingIndex = parseString(event.target.classList.value);
    const checkSpace =
      startingIndex % 10 === 0 ? 0 : _rowLength - (startingIndex % 10) + 1;
    const squares = checkHorizontal
      ? Array.from({ length: shipLength }, (el, index) => startingIndex + index)
      : Array.from(
          { length: shipLength },
          (el, index) => startingIndex + index * 10
        );

    if (checkHorizontal && checkSpace < shipLength) {
      return console.log("not enough space");
    } else if (!board.checkSquares(squares)) {
      return console.log("squares unavailable");
    }

    const currentShip = player.getShip(shipID);
    droppedShip.style.position = "absolute";
    droppedShip.classList.add("placed");
    event.target.appendChild(droppedShip);

    board.placeShip(currentShip, squares);

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
    });
  }

  function dragStart(event) {
    const ship = event.target;
    event.dataTransfer.setData("text/plain", ship.id);
  }

  function doubleClick(event) {
    const ship = event.target.parentElement;

    if (!Array.from(ship.classList).includes("placed")) {
      return ship.classList.toggle("horizontal");
    }

    const currentShip = player.getShip(ship.id);
    const shipLength = currentShip.length;
    const checkHorizontal =
      Array.from(ship.classList).includes("horizontal") !== true;
    const startingIndex = parseString(ship.parentElement.classList.value);
    const checkSpace =
      startingIndex % 10 === 0 ? 0 : _rowLength - (startingIndex % 10) + 1;
    const squares = checkHorizontal
      ? Array.from({ length: shipLength }, (el, index) => startingIndex + index)
      : Array.from(
          { length: shipLength },
          (el, index) => startingIndex + index * 10
        );

    if (!board.checkSquares(squares, currentShip)) {
      return console.log("error");
    } else if (checkHorizontal && checkSpace < shipLength) {
      return console.log("not enough space");
    }

    ship.classList.toggle("horizontal");
    board.placeShip(currentShip, squares);
  }

  return { dragStart, dragOver, doubleClick, dropShip };
};

module.exports = Drag;
