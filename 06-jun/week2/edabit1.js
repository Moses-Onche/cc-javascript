// Problem 1: A function that returns the sum of
// two numbers
function sum(a, b){
  let answer = a + b;
  return answer;
}

// console.log(sum(3, 2));
// console.log(sum(-3, -6));
// console.log(sum(7, 3));

// 50-30-20
function fiftyThirtyTwenty(ati){
  let needs = 50/100 * ati;
  let wants = 30/100 * ati;
  let savings = 20/100 * ati;

  return {'Needs': needs, 'Wants': wants, 'Savings': savings};
  // return {'Needs': 0.5*ati, 'Wants': 0.3 * ati, 'Savings': 0.2 * ati};
}

// console.log(fiftyThirtyTwenty(10000));

// Makes-Ten
function makesTen(a, b){
  if ((a === 10 || b === 10) || a + b === 10){
    return true;
  } else {
    return false;
  }
}

// console.log(makesTen(9, 11));

// Movie Theatre
function acceptIntoMovie(age, isSupervised){
  if (age >= 15 || isSupervised === true){
    return true;
  } else {
    return false;
  }
}

// console.log(acceptIntoMovie(14, true));

function centuryFromYear(year){
  return Math.ceil(year/100) + ' century';
}

// console.log(centuryFromYear(1950));

// Count Ds in a sentence
function countDs(sentence){
  let count = 0;

  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] === 'd' || sentence[i] === 'D'){
      count++;
    }
  }

  return count;
}

console.log(countDs('My friend Dylan got distracted in school.'));