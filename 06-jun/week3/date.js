let display = document.getElementById('time');
console.log(display.children[0]);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function displayTime(){
  const d = new Date();

  display.children[0].innerText = d.getHours();
  display.children[2].innerText = d.getMinutes();
  display.children[4].innerText = d.getSeconds();
  if (display.children[1].style.color === 'white'){
    display.children[1].style.color = 'black'
    display.children[3].style.color = 'black'
  } else {
    display.children[1].style.color = 'white'
    display.children[3].style.color = 'white'
  }
}

setInterval(displayTime, 1000);