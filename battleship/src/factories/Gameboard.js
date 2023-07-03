const Gameboard = () => {
  let board = [];

  // tested
  function initializeBoard() {
    for (let i = 0; i < new Array(100).length; i++) {
      board.push({ square: i, occupied: null });
    }
  }

  function returnSquare(square) {
    return board[square - 1];
  }

  function checkSquares(squares) {
    if (!squares) return;
    return Array.isArray(squares)
      ? squares.every((square) => board[square] && !board[square].occupied)
      : [squares].every((square) => board[square] && !board[square].occupied);
  }

  function fillSquares(ship, squares) {
    if (!ship || !squares) return;
    const iterable = (Array.isArray(squares) && squares) ||
      (arguments.length > 1 && Array.from(arguments)) || [squares];

    iterable.forEach((el, index) => (board[index].occupied = ship));
  }

  function placeShip(ship, squares) {
    if (!checkSquares(squares)) return;
    fillSquares(ship, squares);
    ship.addSquare(squares);
  }

  function receiveAttack(square, opponent) {
    if (checkSquares(square)) return (board[square].occupied = "miss");
    const name = board[square].occupied.name;
    opponent.getShip(name).hit(square);
  }

  return {
    initializeBoard,
    receiveAttack,
    checkSquares,
    placeShip,
    receiveAttack,
    returnSquare,
    board,
  };
};

module.exports = Gameboard;
