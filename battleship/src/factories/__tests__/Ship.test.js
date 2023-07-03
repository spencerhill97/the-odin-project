const Ship = require("../Ship");

const fakeShip = Ship("carrier", 5);

/*======================================== comment ======================================== */
test("testing to add one square", () => {
  fakeShip.addSquare(1);
  expect(fakeShip.squares[0].square).toBe(1);
});

test("testing to add multiple squares", () => {
  fakeShip.addSquare(2, 3);
  expect(fakeShip.squares[1].square).toBe(2);
  expect(fakeShip.squares[2].square).toBe(3);
});

test("testing to add an array of squares", () => {
  fakeShip.addSquare([4, 5]);
  expect(fakeShip.squares[3].square).toBe(4);
  expect(fakeShip.squares[4].square).toBe(5);
});

/*======================================== comment ======================================== */

test("checking for hit", () => {
  fakeShip.hit(1);
  expect(fakeShip.squares[0].hit).toBe(true);
});

/*======================================== comment ======================================== */

test("looking for ship to return sunk", () => {
  fakeShip.hit(2);
  fakeShip.hit(3);
  fakeShip.hit(4);
  fakeShip.hit(5);
  expect(fakeShip.sunk()).toBe(true);
});

const fakeShipTwo = Ship("destroyer", 2);

test("looking for ship to return not sunk / false", () => {
  fakeShipTwo.addSquare(99, 100);
  fakeShipTwo.hit(99);
  expect(fakeShipTwo.sunk()).toBe(false);
  expect(fakeShipTwo.squares[0].hit).toBe(true);
});
