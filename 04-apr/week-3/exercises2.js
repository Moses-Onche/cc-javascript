// function stackBoxes(n){
//   let answer = n ** 2;
//   return answer;
// }

// console.log(stackBoxes(1));
// console.log(stackBoxes(2));
// console.log(stackBoxes(0));

// function carsNeeded(n){
//   if (n === 0) return 0;
//   else return Math.ceil(n / 5);
// }

// console.log(carsNeeded(5));
// console.log(carsNeeded(11));
// console.log(carsNeeded(0));

function programmers(firstWage, secondWage, thirdWage){
  let highestPaid = Math.max(firstWage, secondWage, thirdWage);
  let lowestPaid = Math.min(firstWage, secondWage, thirdWage);

  return highestPaid - lowestPaid;
}

// programmers(147, 33, 526)
console.log(programmers(147, 33, 526));
console.log(programmers(33, 72, 74));
console.log(programmers(1, 5, 9));