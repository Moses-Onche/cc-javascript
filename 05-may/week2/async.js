let name = 'Tinubu'
function sayHello(){
  console.log('Hello ' + name);
}

// setTimeout(sayHello, 3000);
// setInterval(sayHello, 1000);

// Display Time
function displayTime(){
  let time = new Date();
  let timeHeading = document.getElementById('time');
  timeHeading.innerHTML = time.toLocaleTimeString();
}

// displayTime();
setInterval(displayTime, 1000);
