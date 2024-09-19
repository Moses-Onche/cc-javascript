function formatPhoneNumber(arr){
  let finalPhoneNum = '(';
  for (let count = 0; count < arr.length; count++){
    finalPhoneNum = finalPhoneNum + arr[count];
    if (count === 3){
      finalPhoneNum = finalPhoneNum + ')';
    } else if (count === 6){
      finalPhoneNum = finalPhoneNum + '-';
    } else if (count === arr.length - 1){
      finalPhoneNum = finalPhoneNum + ')';
    }
  }
  return finalPhoneNum;
}

console.log(formatPhoneNumber([0, 7, 0, 4, 9, 5, 8, 2, 9, 9, 5]));