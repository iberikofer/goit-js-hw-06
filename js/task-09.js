function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorInfo = document.getElementsByClassName("color")[0];
const changeColorButton = document.getElementsByClassName("change-color")[0];
const body = document.body;

changeColorButton.addEventListener("click", bodyChangeColor);

function bodyChangeColor() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorInfo.textContent = body.style.backgroundColor;
}
