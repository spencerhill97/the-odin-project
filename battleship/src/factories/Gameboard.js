const Gameboard = () => {
  let board = [];

  // tested
  function initializeBoard() {
    for (let i = 0; i < new Array(100).length; i++) {
      board.push({ square: i + 1, occupied: null });
    }
  }

  function getSquare(square) {
    return board.find((el) => Number(el.square) === square);
  }

  function checkSquares(squares) {
    if (!squares) return console.log("ran");
    return Array.isArray(squares)
      ? squares.every(
          (square) => getSquare(square) && !getSquare(square).occupied
        )
      : [squares].every(
          (square) => getSquare(square) && !getSquare(square).occupied
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
    if (!checkSquares(squares)) return console.log("invalid");
    fillSquares(ship, squares);
    ship.addSquare(squares);
  }

  function receiveAttack(square, opponent) {
    if (checkSquares(square)) return (getSquare(square).occupied = "miss");
    const name = getSquare(square).occupied;
    opponent.getShip(name).hit(square);
  }

  return {
    initializeBoard,
    receiveAttack,
    checkSquares,
    placeShip,
    receiveAttack,
    getSquare,
    board,
  };
};

module.exports = Gameboard;
