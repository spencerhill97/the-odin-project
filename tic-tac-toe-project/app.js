const gameController = (() => {
  const _board = new Array(9);
  const _squares = document.querySelectorAll(".square");
  let _gameOver = false;
  let _result = undefined;
  let _turn = true;
  const _WINNING_COMBOS = [
    //horizontal combos
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical combos
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal combos
    [0, 4, 8],
    [6, 4, 2],
  ];

  const reset = function () {
    _squares.forEach((square, index) => {
      _board[index] = undefined;
      square.innerText = "";
      square.classList.remove("user", "ai");
    });
  };

  document.querySelector(".reset").addEventListener("click", () => {
    reset();
  });

  _squares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (square.innerText !== "") return;

      square.innerText = player.sign;
      square.classList.add("user");
      _board[index] = player.sign;
      checkWinner();
      _turn++;
      aiLogic();
    });
  });

  const aiLogic = function () {
    let nextMove;

    for (let index = 0; index < _WINNING_COMBOS.length; index++) {
      const combo = _WINNING_COMBOS[index].map((element) => {
        return _board[element] ? _board[element] : element;
      });
      const checkmate = combo.filter((value) => value === ai.sign).length >= 2;
      const defensive =
        combo.filter((value) => value === player.sign).length >= 2;

      if (checkmate) {
        nextMove = combo.filter((value) => value !== ai.sign);
        _squares[nextMove].innerText = ai.sign;
        _board[nextMove] = ai.sign;
        _squares[nextMove].classList.add("ai");
        break;
      } else if (defensive) {
        console.log("defense");
        nextMove = combo.filter((value) => value !== player.sign);
        console.log(_squares[nextMove]);
        _squares[nextMove].innerText = ai.sign;
        _board[nextMove] = ai.sign;
        _squares[nextMove].classList.add("ai");
      }
    }

    // if (_board[4] === "") {
    //   _squares[4].innerText = ai.sign;
    //   _board[4] = ai.sign;
    //   _squares[4].classList.add("ai");
    //   _turn++;
    //   checkWinner();
    //   return;
    // }
  };

  const checkWinner = function () {
    for (let index = 0; index < _WINNING_COMBOS.length; index++) {
      const currentSub = _WINNING_COMBOS[index].map((num) => _board[num]);
      if (currentSub.every((num) => num)) {
        if (currentSub.every((num) => num === player.sign)) {
          _gameOver = true;
          _result = player;
          break;
        } else if (currentSub.every((num) => num === ai.sign)) {
          _gameOver = true;
          _result = ai;
          break;
        }
      }
    }

    if (_gameOver === undefined && _turn >= 9) {
      _result = "tie";
      _gameOver = true;
    }
  };

  return { reset };
})();

const addPlayer = function (name, sign) {
  return { name, sign };
};

const player = addPlayer("player", "X");
const ai = addPlayer("ai bot", "O");
