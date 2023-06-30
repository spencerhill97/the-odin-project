module.exports = reverseString;

function reverseString(string) {
  if (!string.length) return;
  return string.split("").reverse().join("");
}
