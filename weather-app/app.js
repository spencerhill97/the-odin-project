import UI from "./UI.js";
const ui = new UI();

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  ui.setCurrentCity(input.value);
  ui.renderPage(input.value);
  input.value = "";
});
