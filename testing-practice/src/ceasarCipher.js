const ceasarCipher = {
  _alphabet: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],

  returnLetter(index) {
    return this._alphabet[index];
  },

  validateLetter(letter) {
    const regex = new RegExp("[a-z]", "i");
    return regex.test(letter);
  },

  returnIndex(letter) {
    if (!this.validateLetter(letter)) return;
    return this._alphabet.indexOf(letter.toLowerCase());
  },

  returnCipher(letter, number) {
    const index = this.returnIndex(letter);
    const checkNum = number % this._alphabet.length;

    return index + checkNum > this._alphabet.length - 1
      ? this.returnLetter(index + checkNum - this._alphabet.length)
      : this.returnLetter(index + checkNum);
  },

  returnResult(string, number) {
    if (!string) return;
    return string
      .split("")
      .map((letter) => {
        if (this.validateLetter(letter)) {
          return this.returnCipher(letter, number);
        }

        return letter;
      })
      .join("");
  },
};

module.exports = ceasarCipher;
