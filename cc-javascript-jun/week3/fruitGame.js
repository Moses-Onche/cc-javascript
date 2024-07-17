let apple = document.getElementById('fruit');

function move(){
  let num1 = Math.trunc(Math.random() * 90);
  let num2 = Math.trunc(Math.random() * 90);
  apple.style.top = num1 + '%';
  apple.style.left = num2 + '%';
}

setInterval(move, 500);