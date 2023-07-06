const Gameboard = require("../Gameboard");
const Player = require("../Player");
const Ship = require("../Ship");

const fakeGameboard = Gameboard();
fakeGameboard.initializeBoard();

/*======================================== comment ======================================== */
test("testing the length of the game board", () => {
  expect(fakeGameboard.board.length).toBe(100);
});

test("confirming keys of each square on the board", () => {
  expect(fakeGameboard.board[0]).toEqual({
    square: 1,
    occupied: null,
  });
});

/*======================================== comment ======================================== */
test("checking one available square", () => {
  expect(fakeGameboard.checkSquares(51)).toBeTruthy();
});

test("checking one unavailable square", () => {
  expect(fakeGameboard.checkSquares(101)).toBeFalsy();
});

test("checking array of available squares", () => {
  expect(fakeGameboard.checkSquares([50, 51, 52])).toBeTruthy();
});

test("checking available squares not in an array", () => {
  expect(fakeGameboard.checkSquares(50, 51, 52)).toBeTruthy();
});

test("testing for falsy return value with available and unavailable", () => {
  expect(fakeGameboard.checkSquares(104, 1, 3, 4)).toBeFalsy();
});

test("testing for falsy return value with an array of available and unavailable", () => {
  expect(fakeGameboard.checkSquares([104, 1, 3, 4])).toBeFalsy();
});

/*======================================== comment ======================================== */
const testGame = Gameboard();
testGame.initializeBoard();

const playerOne = Player("player one");
const playerTwo = Player("player two");

test("checking that ships were placed correctly", () => {
  testGame.placeShip(playerOne.ships[0], [1, 2, 3, 4, 5]);
  expect(playerOne.ships[0].getSquares()).toContain(1);
  expect(testGame.board[0].occupied).not.toBeNull();
  expect(playerOne.ships[0].getSquares()).toContain(2);
  expect(playerOne.ships[0].getSquares()).toContain(3);
  expect(playerOne.ships[0].getSquares()).toContain(4);
  expect(playerOne.ships[0].getSquares()).toContain(5);
  expect(playerOne.ships[0].getSquares()).not.toContain(6);
});

test("checking that ships were placed incorrectly", () => {
  testGame.placeShip(playerOne.ships[1], [1, 2, 3, 105]);
  // returns undefined and ships.squares is an empty array
  expect(testGame.placeShip(playerOne.ships[1], [1, 2, 3, 105])).toBe(
    undefined
  );
});

test("checking that after placing ships that squares are marked occupied", () => {
  expect(testGame.board[0].occupied).toBeTruthy();
  expect(testGame.board[1].occupied).toBeTruthy();
  expect(testGame.board[2].occupied).toBeTruthy();
  expect(testGame.board[3].occupied).toBeTruthy();
  expect(testGame.board[4].occupied).toBeTruthy();
  // checking for square that is not assigned a ship
  expect(testGame.board[6].occupied).toBeNull();
});

/*======================================== comment ======================================== */
test("testing for a valid hit on ship", () => {
  testGame.receiveAttack(1, playerOne.getShip("carrier"));
  expect(playerOne.getShip("carrier").getSquare(1).hit).toBe(true);
});

test("testing for a invalid hit on ship", () => {
  expect(playerOne.getShip("carrier").getSquare(2).hit).toBe(false);
});

test("testing for miss", () => {
  testGame.receiveAttack(100, playerOne);
  expect(testGame.board[99].occupied).toBe("miss");
});

/*======================================== comment ======================================== */
// test("testing for a sunken ship to return true", () => {
//   testGame.receiveAttack(1, playerOne);
//   testGame.receiveAttack(2, playerOne);
//   testGame.receiveAttack(3, playerOne);
//   testGame.receiveAttack(4, playerOne);
//   expect(playerOne.getShip("carrier").sunk()).toBe(true);
// });

test("testing for a ship thats not sunk to return false", () => {
  expect(playerTwo.getShip("carrier").sunk()).toBe(false);
});
