const input = document.getElementById("font-size-control");
const magicText = document.getElementById("text");
const change = input.addEventListener("input", inputChange);

function inputChange() {
  magicText.style.fontSize = input.value + "px";
}
