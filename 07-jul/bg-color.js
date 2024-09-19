let button = document.getElementById('button');
// console.log(button);

button.addEventListener('click', function(){
  let color = Math.trunc(Math.random() * 900000);
  // console.log(color);
  document.body.style.backgroundColor = '#' + color;
})