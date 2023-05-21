const checkMatchingPasswords = () => {
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");

  return password.value === confirmPassword.value;
};

const inputCollection = document.querySelectorAll("input");
[...inputCollection].forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const valid = e.target.checkValidity();
    const alert = input.parentElement.querySelector(".alert");
    if (e.target.value === "") {
      e.target.classList.remove("valid");
      e.target.classList.remove("invalid");
    } else if (valid) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
      alert.classList.add("hidden");
    } else {
      e.target.classList.add("invalid");
      e.target.classList.remove("valid");
    }
  });
});

const submitBtn = document.querySelector(".btn");
submitBtn.addEventListener("click", () => {
  const allValid = [...inputCollection].every((input) => input.checkValidity());
  const obj = {};
  (allValid &&
    [...inputCollection].forEach((input) => {
      const name = input.getAttribute("id");
      const value = input.value;
      obj[name] = value;
    })) ||
    [...inputCollection].forEach((input) => {
      const valid = input.checkValidity();
      const alert = input.parentElement.querySelector(".alert");
      if (valid === false) {
        alert.classList.remove("hidden");
      } else if (valid) {
        alert.classList.add("hidden");
      }
    });
});
