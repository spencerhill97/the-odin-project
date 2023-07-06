const Gameboard = () => {
  let board = [];

  function initializeBoard() {
    for (let i = 0; i < new Array(100).length; i++) {
      board.push({ square: i + 1, occupied: null });
    }
  }

  function getSquare(square) {
    return board.find((el) => Number(el.square) === square);
  }

  function checkSquares(squares, ship) {
    if (!squares) return console.log("checkSquares error");
    const iterable = Array.isArray(squares) ? squares : [squares];

    // checking that all squares in the board array
    if (iterable.some((square) => !getSquare(square))) return;

    return iterable.every(
      (square) =>
        (getSquare(square) && !getSquare(square).occupied) ||
        (getSquare(square) &&
          ship.name &&
          getSquare(square).occupied === ship.name)
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
    if (!getSquare(square).occupied)
      return (getSquare(square).occupied = "miss");
    const occupied = getSquare(square).occupied;
    opponent.hit(square);
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
