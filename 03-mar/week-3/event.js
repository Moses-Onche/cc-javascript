let btn = document.getElementById('button');
let date = document.getElementById("date");

btn.addEventListener("click", () => {
  date.innerHTML = new Date();
})