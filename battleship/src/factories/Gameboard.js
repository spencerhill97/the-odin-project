const Gameboard = () => {
  let board = [];
  const _rowLength = 10;
  const _activeShip = false;

  function initializeBoard() {
    for (let i = 0; i < new Array(100).length; i++) {
      board.push({ square: i + 1, occupied: null });
    }
  }

  function getSquare(square) {
    return board.find((el) => Number(el.square) === square);
  }

  function checkSquares(squares, ship) {
    if (!squares) return;
    const iterable = Array.isArray(squares) ? squares : [squares];
    // checking that all squares in the board array
    if (iterable.some((square) => !getSquare(square))) return;

    return iterable.every(
      (square) =>
        (getSquare(square) && !getSquare(square).occupied) ||
        (getSquare(square) && ship && getSquare(square).occupied === ship.name)
    );
  }

  function fillSquares(ship, squares) {
    if (!ship || !squares) return;
    const iterable = (Array.isArray(squares) && squares) ||
      (arguments.length > 1 && Array.from(arguments)) || [squares];

    board.forEach((el) => {
      if (el.occupied === ship.name) {
        el.occupied = null;
      }
    });

    iterable.forEach((el) => (getSquare(el).occupied = ship.name));
  }

  function placeShip(ship, squares) {
    if (!checkSquares(squares, ship)) return;
    fillSquares(ship, squares);
    ship.addSquare(squares);
  }

  function receiveAttack(square, opponent) {
    if (!getSquare(square).occupied) {
      getSquare(square).occupied = "miss";
      return;
    } else if (
      getSquare(square).occupied === "hit" ||
      getSquare(square).occupied === "miss"
    ) {
      return;
    }

    const occupied = getSquare(square).occupied;
    opponent.getShip(occupied).hit(square);
    getSquare(square).occupied = "hit";
  }

  function getSurroundingSquares(square) {
    const sq = Number(square);
    const rightSquare = sq % 10 === 0 ? null : sq + 1;
    const leftSquare = sq % 10 === 1 ? null : sq - 1;
    const topSquare = sq - 10 < 1 ? null : sq - 10;
    const bottomSquare = sq + 10 > 100 ? null : sq + 10;

    return [rightSquare, leftSquare, topSquare, bottomSquare];
  }

  function placeShipRandomly(ship) {
    const randomIndex = Math.floor(Math.random() * board.length + 1);
    // if randomDir returns zero it will attempt to vertically replace
    // ship before horizontally
    const randomDir = Math.floor(Math.random() * 2);
    let squares =
      randomDir === 0
        ? Array.from(
            { length: ship.length },
            (el, index) => randomIndex + index * 10
          )
        : Array.from(
            { length: ship.length },
            (el, index) => randomIndex + index
          );
    const checkSpace =
      randomIndex % 10 === 0 ? 0 : _rowLength - (randomIndex % 10) + 1;

    if (!randomDir && checkSquares(squares)) {
      return placeShip(ship, squares);
    } else if (checkSquares(squares) && checkSpace) {
      return placeShip(ship, squares);
    }

    return false;
  }

  function aiTurn(player, playerBoard) {
    console.clear();
    let openSquares = playerBoard.board.filter(
      (sq) => sq.occupied !== "miss" && sq.occupied !== "hit"
    );
    const randomNumber = Math.floor(Math.random() * openSquares.length);
    const randomSquare = openSquares[randomNumber].square;
    const squareDiv = document.querySelectorAll(`.player-board > .square`)[
      randomSquare - 1
    ];

    console.log(openSquares);

    console.log(randomSquare);
    console.log(squareDiv);

    if (
      playerBoard.getSquare(randomSquare).occupied === "miss" ||
      playerBoard.getSquare(randomSquare).occupied === "hit"
    ) {
      console.log("ERROR!!!");
      return;
    }

    playerBoard.receiveAttack(randomSquare, player);

    if (playerBoard.getSquare(randomSquare).occupied === "miss") {
      const piece = document.createElement("div");
      piece.classList.add("piece");
      squareDiv.append(piece);
      console.log("miss");
    } else if (playerBoard.getSquare(randomSquare).occupied === "hit") {
      const piece = document.createElement("div");
      piece.innerText = "X";
      piece.classList.add("hit");
      squareDiv.append(piece);
    }

    console.log(
      playerBoard.board.filter(
        (sq) => sq.occupied !== "miss" && sq.occupied !== "hit"
      )
    );
  }

  return {
    initializeBoard,
    receiveAttack,
    checkSquares,
    placeShip,
    receiveAttack,
    getSquare,
    board,
    getSurroundingSquares,
    placeShipRandomly,
    aiTurn,
  };
};

module.exports = Gameboard;
