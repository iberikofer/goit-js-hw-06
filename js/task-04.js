let counterValue = 0;
const container = document.getElementById("counter");
const buttonMinus = container.firstElementChild;
let number = document.getElementById("value");
const buttonPlus = container.lastElementChild;

buttonPlus.addEventListener("click", counterValuePlus);
function counterValuePlus() {
  counterValue += 1;
  number.textContent = counterValue;
  console.log(counterValue);
}

buttonMinus.addEventListener("click", counterValueMinus);
function counterValueMinus() {
  counterValue -= 1;
  number.textContent = counterValue;
  console.log(counterValue);
}
