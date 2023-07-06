const Ship = require("./Ship");

const Player = (name, boolean) => {
  let AI = boolean;

  const carrier = Ship("carrier", 5);
  const battleship = Ship("battleship", 4);
  const cruiser = Ship("cruiser", 3);
  const submarine = Ship("submarine", 3);
  const destroyer = Ship("destroyer", 2);

  function getShip(name) {
    return ships.find((ship) => ship.name === name);
  }

  const ships = [carrier, battleship, cruiser, submarine, destroyer];

  return { name, ships, getShip, AI };
};

module.exports = Player;
