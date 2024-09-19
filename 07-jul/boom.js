let button = document.getElementsByTagName("button")[0];
let trigger = true;
// console.log(button);

button.addEventListener("click", function () {
  if (trigger) {
    button.innerHTML = "BOOM!";
    button.style.fontSize = "150px";
    button.style.color = "white";
    button.style.backgroundColor = "red";
    button.style.width = "70%";
    button.style.height = "50%";
    button.style.transition = "4s";
    trigger = false;
  } else {
    button.innerHTML = "Click Me";
    button.style.fontSize = "small";
    button.style.color = "black";
    button.style.backgroundColor = "white";
    button.style.width = "10%";
    button.style.height = "8%";
    trigger = true;
  }
});

// button.addEventListener('mouseout', function(){
//   button.innerHTML = 'Click Me';
//   button.style.fontSize = 'small';
//   button.style.color = 'black';
//   button.style.backgroundColor = 'white'
//   button.style.width = '10%';
//   button.style.height = '8%';
// })
