let time = document.querySelector("#clock");
console.log(time);

function displayTime(){
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();

  if (hour > 12){
    hour = "0" + (hour - 12);
  }

  time.innerHTML = hour + ":" + minute + ":" + second + " PM";
}

// displayTime();
setInterval(displayTime, 1000);