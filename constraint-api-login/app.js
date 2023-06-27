import Countries from "./data.js";

const countries = new Countries();

const countryInput = document.getElementById("country");
countries.getList().forEach((country) => {
  const option = document.createElement("option");
  option.setAttribute("value", country);
  option.innerText = country;
  countryInput.append(option);
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log({
    name: name.value,
    email: email.value,
    country: country.value,
    zipcode: zipcode.value,
    password: password.value,
    confirmed: confirmPassword.value,
  });
});

const name = document.querySelector("#name");
const nameRegex = new RegExp(`^[a-zA-Z]+\\s[a-zA-Z]+$`, "");
name.setAttribute("required", "true");
name.addEventListener("input", (e) => {
  if (!nameRegex.test(name.value)) {
    name.className = "invalid";
    name.setCustomValidity(
      "Please enter your first and last name with a single space in-between"
    );
  } else {
    name.className = "valid";
    name.setCustomValidity("");
  }

  name.reportValidity();
});

const email = document.querySelector("#email");
const emailRegex = new RegExp(".+@[a-z]+.[a-z]+", "");
email.setAttribute("required", "true");

email.addEventListener("input", (e) => {
  if (!emailRegex.test(email.value)) {
    email.className = "invalid";
    email.setCustomValidity(
      "Please enter a valid email with @ key followed by domain and '.com'"
    );
  } else {
    email.className = "valid";
    email.setCustomValidity("");
  }

  email.reportValidity();
});

const country = document.querySelector("#country");
name.addEventListener("onchange", (e) => {
  console.log("country");
});

const zipcode = document.querySelector("#zipcode");
const zipcodeRegex = new RegExp("^([0-9]{5})$", "");

zipcode.addEventListener("input", (e) => {
  if (!zipcodeRegex.test(zipcode.value)) {
    zipcode.className = "invalid";
    zipcode.setCustomValidity("Please enter 5 digits for the zip code");
  } else {
    zipcode.className = "valid";
    zipcode.setCustomValidity("");
  }

  zipcode.reportValidity();
});

const password = document.querySelector("#password");
const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$",
  ""
);

password.addEventListener("input", (e) => {
  if (!passwordRegex.test(password.value)) {
    password.className = "invalid";
    password.setCustomValidity(
      "Must contain 8-16 characters, one uppercase, one number, and one special character"
    );
  } else {
    password.className = "valid";
    password.setCustomValidity("");
  }

  password.reportValidity();
});

const confirmPassword = document.querySelector("#confirm-password");

confirmPassword.addEventListener("input", (e) => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.className = "invalid";
    confirmPassword.setCustomValidity("Passwords must match buddy!");
  } else {
    confirmPassword.className = "valid";
    confirmPassword.setCustomValidity("");
  }

  confirmPassword.reportValidity();
});
