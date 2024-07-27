let button = document.getElementById("button");
let output = document.getElementById("message");

button.addEventListener("click", () => {
  let input = document.getElementById('input').value;
  if (input >= 1 && input <= 10) {
    output.innerHTML = "Input OK";
  } else {
    output.innerHTML = "Not valid";
  }
})