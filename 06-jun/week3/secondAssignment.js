function formatPhoneNumber(arr){
  let phone = '(';

  for (let i = 0; i < arr.length; i++){
    phone += arr[i];
    // console.log(phone);
    if (i === 2){
      phone += ') ';
    }

    if (i === 5){
      phone += '-'
    }
  }

  return phone;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));

console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));