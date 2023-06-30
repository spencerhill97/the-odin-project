const ceasarCipher = require("../src/ceasarCipher");

/*======================================== validate ======================================== */

test("testing for empty argument", () => {
  expect(ceasarCipher.validateLetter("")).toBeFalsy();
});

test("testing for a character that's not a letter", () => {
  expect(ceasarCipher.validateLetter("!")).toBeFalsy();
});

/*======================================== index ======================================== */
test("testing for returning first index", () => {
  expect(ceasarCipher.returnIndex("a")).toBe(0);
});

test("testing for returning 5th index", () => {
  expect(ceasarCipher.returnIndex("f")).toBe(5);
});

test("testing for handling uppercase letters", () => {
  expect(ceasarCipher.returnIndex("A")).toBe(0);
});

test("testing for returning last index", () => {
  expect(ceasarCipher.returnIndex("z")).toBe(25);
});

/*======================================== cipher ======================================== */
test("testing for first index and adding cipher", () => {
  expect(ceasarCipher.returnCipher("a", 5)).toBe("f");
});

test("testing for last index and adding cipher", () => {
  expect(ceasarCipher.returnCipher("z", 5)).toBe("e");
});

test("testing when cipher should circle back to same index", () => {
  expect(ceasarCipher.returnCipher("a", 104)).toBe("a");
});

/*======================================== final ======================================== */
test("testing for result with string", () => {
  expect(ceasarCipher.returnResult("hello", 1)).toBe("ifmmp");
});

test("testing for result with string that has a cipher larger than length", () => {
  expect(ceasarCipher.returnResult("zebra", 27)).toBe("afcsb");
});

test("testing for result with non letter characters", () => {
  expect(ceasarCipher.returnResult("zebra12!", 1)).toBe("afcsb12!");
});
