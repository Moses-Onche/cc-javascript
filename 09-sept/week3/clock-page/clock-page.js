let time = document.getElementById("clock");
let time2 = document.getElementById("new-clock");
// console.log(time);

function displayTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let timeOfDay = ' AM';

  if (hour > 12){
    hour = '0' + (hour - 12);
    timeOfDay = ' PM';
  }

  if (minute < 10){
    minute = '0' + minute;
  }

  if (second < 10){
    second = '0' + second;
  }
  time.innerHTML = hour + ":" + minute + ":" + second + timeOfDay;
  time2.innerHTML = hour + ":" + minute + ":" + second + timeOfDay;
}

setInterval(displayTime, 1000);