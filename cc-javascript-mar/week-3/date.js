function timeForMilkAndCookies(date){
  // console.log(date.getMonth());
  // console.log(date.getDate());

  if (date.getMonth() === 11 && date.getDate() === 24){
    return true;
  } else {
    return false;
  }
}

console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));