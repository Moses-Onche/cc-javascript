// function timeForMilkAndCookies(date){
//   // console.log(date.getMonth());
//   // console.log(date.getDate());

//   if (date.getMonth() === 11 && date.getDate() === 24){
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));



let switcher = true;
setInterval(() => {
  let currentDate = new Date();
  let time;
  if (currentDate.getSeconds() < 10){
    time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":0" + currentDate.getSeconds();
    if (currentDate.getMinutes() < 10){
      time = currentDate.getHours() + ":0" + currentDate.getMinutes() + ":0" + currentDate.getSeconds();
    }
  } else {
    time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
  }
  
  // if (switcher) {
  //   document.getElementById('date').innerHTML = time.toString();
  //   switcher = false;
  // } else {
  //   document.getElementById('date').innerHTML = time.toString();
  //   switcher = true;
  // }
  document.getElementById('date').innerHTML = time;
}, 1000)

// setTimeout(function, 0);
// () => {}