let input = document.getElementById("name-input");
let output = document.getElementById("name-output");
input.addEventListener("input", keyDownFunc);
function keyDownFunc(listenerKey) {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = listenerKey.currentTarget.value;
    console.log(listenerKey.currentTarget.value);
  }
}
