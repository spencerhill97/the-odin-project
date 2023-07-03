const Player = require("../Player");

const fakePlayerOne = Player("user");

test("testing for ships being declared in ships array", () => {
  expect(fakePlayerOne.ships.length).toBe(5);
});

test("testing for name", () => {
  expect(fakePlayerOne.name).toBe("user");
});

test("testing to get ship instance by name", () => {
  expect(fakePlayerOne.getShip("carrier").name).toBe("carrier");
  expect(fakePlayerOne.getShip("submarine").name).toBe("submarine");
});

test("testing to get ship instance by name", () => {
  expect(fakePlayerOne.getShip("otis")).toBeFalsy();
});
