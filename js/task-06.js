let inputToVal = document.getElementById("validation-input");
inputToVal.addEventListener("blur", inputVal);
const inputMaxLen = inputToVal.getAttribute("data-length");
const inputMaxLenToNumber = Number(inputMaxLen);

function inputVal() {
  if (inputToVal.value.length !== inputMaxLenToNumber) {
    inputToVal.classList.toggle("invalid", true);
    inputToVal.classList.toggle("valid", false);
  } else {
    inputToVal.classList.toggle("valid", true);
    inputToVal.classList.toggle("invalid", false);
  }
}
