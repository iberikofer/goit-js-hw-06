const form = document.getElementsByClassName("login-form")[0];
const emailInput = document.getElementsByName("email")[0];
const passwordInput = document.getElementsByName("password")[0];
const submitButton = document.getElementsByTagName("button")[0];

form.addEventListener("submit", submitButFunc);

function submitButFunc(event) {
  event.preventDefault();

  if (emailInput.value === "" || passwordInput.value === "") {
    return alert("Fill in all blanks!");
  }

  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
}
