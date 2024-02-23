let minutes = 2;
let seconds = 60;
let displayMinutes;
let displaySeconds;

const timer = document.getElementById("countdown");

function updateTimer() {
  //Calculate time
  if (seconds === 0) {
    if (minutes === 0) return;
    seconds = 60;
    minutes--;
  }
  seconds--;

  //Conditionally add 0 and display seconds.
  if (seconds < 10) {
    displaySeconds = "0" + String(seconds);
  } else {
    displaySeconds = String(seconds);
  }

  //Conditionally add 0 and display minutes.
  if (minutes < 10) {
    displayMinutes = "0" + String(minutes);
  } else {
    displayMinutes = String(minutes);
  }

  timer.innerHTML = `${displayMinutes}: ${displaySeconds}`;
}

setInterval(updateTimer, 1000)