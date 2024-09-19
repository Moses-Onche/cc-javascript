function getSum(arr){
  let sum = 0;

  for(let count = 0; count < arr.length; count++){
    sum = sum + arr[count];
  }

  return sum;
}

console.log(getSum([2, 7, 4]));