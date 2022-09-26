const emailField = document.getElementById("emailField");
const passwordField = document.getElementById("passwordField");
const usernameField = document.getElementById("usernameField");
const containerSendForm = document.getElementById("container-send-form");

let existErrorInput = false;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", validarFormulario);
});

const setErrors = (message, field, isError = true) => {
  if (isError) {
    field.firstElementChild.classList.add("invalid");
    field.lastElementChild.innerText = message;
  } else {
    field.firstElementChild.classList.remove("invalid");
    field.lastElementChild.innerText = "";
  }
};

function validarFormulario(event) {
  event.preventDefault();

  // validando username
  const username = document.getElementById("username");
  const usernameValue = username.value;
  if (usernameValue.trim().length === 0 || usernameValue.trim().length < 4) {
    existErrorInput = true;
    if (usernameValue.trim().length === 0) {
      setErrors("Please enter a username", usernameField);
    }
    if (
      usernameValue.trim().length < 4 &&
      !(usernameValue.trim().length === 0)
    ) {
      setErrors(
        "Please enter a username with at least 4 characters",
        usernameField
      );
    }
  } else {
    setErrors("", usernameField, false);
    existErrorInput = false;
  }

  //   // validando email
  const email = document.getElementById("email");
  const emailValue = email.value;
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (emailValue.trim().length === 0 || !regex.test(emailValue)) {
    existErrorInput = true;
    if (emailValue.trim().length === 0)
      setErrors("Please enter a email", emailField);
    if (!regex.test(emailValue) && !(emailValue.trim().length === 0))
      setErrors("Please enter a valid email", emailField);
  } else {
    setErrors("", emailField, false);
    existErrorInput = false;
  }

  //   //validando password

  const password = document.getElementById("password");
  const passwordValue = password.value;
  if (passwordValue.trim().length === 0 || passwordValue.trim().length < 6) {
    existErrorInput = true;
    if (passwordValue.trim().length === 0)
      setErrors("Please enter a password", passwordField);
    if (
      passwordValue.trim().length < 6 &&
      !(passwordValue.triem().length === 0)
    )
      setErrors("Please enter a password with at least 6 characters");
  } else {
    setErrors("", passwordField, false);
    existErrorInput = false;
  }

  if (!existErrorInput) {
    setTimeout(() => {
      containerSendForm.firstElementChild.classList.remove("notShow");
      containerSendForm.lastElementChild.classList.add("notShow");
    }, 100);
    setTimeout(() => {
      username.value = "";
      email.value = "";
      password.value = "";
      location.href = "welcome.html";
    }, 1000);
  }
}
