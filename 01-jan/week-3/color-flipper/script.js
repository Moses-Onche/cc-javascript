const button = document.getElementById('main-button');
const page = document.body;
let displayColorHex = document.getElementById('color-hex');


button.addEventListener('click', changeColor);

function changeColor(){
  let color = Math.floor((Math.random() * 900000) + 100000);
  document.body.style.backgroundColor = '#' + color;
  displayColorHex.innerHTML = '#' + color;
}