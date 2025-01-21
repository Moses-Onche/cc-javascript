let heading = document.getElementsByTagName("h1")[0];
heading.style.fontSize = '150px'
heading.style.border = 'solid 5px black'
heading.style.borderRadius = '20px'

function displayTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let timeOfDay = ' AM';

  if (hour > 12){
    if (hour <= 21) hour = '0' + (hour - 12);
    else hour = hour - 12;
    timeOfDay = ' PM';
  }

  if (minute < 10){
    minute = '0' + minute;
  }

  if (second < 10){
    second = '0' + second;
  }
  heading.innerHTML = hour + ":" + minute + ":" + second + timeOfDay;
}

setInterval(displayTime, 1000);
