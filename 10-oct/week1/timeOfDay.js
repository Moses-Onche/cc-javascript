let time = prompt('Type in the current time in 24 hour format');
// console.log(time);

if (time >= 6 && time < 12){
  alert('Good morning.');
} else if (time >= 12 && time < 16){
  alert('Good afternoon');
} else if(time >= 16 && time < 23){
  alert('Good evening');
} else {
  alert('You should be in bed');
}
