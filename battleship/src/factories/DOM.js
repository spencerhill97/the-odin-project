const DOM = () => {
  function initGame() {
    header();
    // display choices
    // two player or against computer
    // player one is automatically "user";
  }

  function header() {
    const h1 = document.createElement("h1");
    h1.innerText = "Battleship";
    h1.classList.add("title");
    document.append(h1);
  }

  return { initGame, header };
};

module.exports = DOM;
