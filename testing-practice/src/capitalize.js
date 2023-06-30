module.exports = capitalize;

function capitalize(string) {
  if (!string.length || typeof string !== "string") return;
  return string.split("")[0].toUpperCase() + string.slice(1);
}
