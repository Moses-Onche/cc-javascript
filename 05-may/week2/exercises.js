// Exercise 1: The sum of two numbers
function addition(a, b){
  return a + b;
}

// Exercise 2: Convert minutes to seconds
// console.log(addition(3, 2));
// console.log(addition(-3, -6));
// console.log(addition(7, 3));

// Exercise 3:

// Exercise 4: Increment from 1 to current number
function addUp(number){
  let sum = 0;
  for (let count = 1; count <= number; count++){
    sum = sum + count;
  }

  return sum;
}

// console.log(addUp(4))
// console.log(addUp(13))
// console.log(addUp(600))

// Exercise 5: Find a character in a string
function charCount(char, word){
  let total = 0;
  for (let count = 0; count < word.length; count++){
    if (word[count] === char){
      total = total + 1;
    }
  }

  return total;
}

// console.log(charCount('a', 'edabit'))
// console.log(charCount('c', 'Chamber of secrets'))
// console.log(charCount('b', 'big fat bubble'))

// Exercise: 50-30-20 Budgeting program
function fiftyThirtyTwenty(income){
  const needs = income * 0.5;
  const wants = income * 0.3;
  const savings = income * 0.2;

  const answer = {
    "Our needs": needs,
    "Wants": wants,
    "Savings": savings
  }

  return answer['Our needs']
}

// console.log(fiftyThirtyTwenty(10000))

// Exercise: minMax
function minMax(array){
  let smallest = Math.min(...array);
  let largest = Math.max(...array);

  return [smallest, largest];
}

// console.log(minMax([1, 2, 3, 4 ,5]));

// Exercise: Emoticons
function emotify(sentence){
  sentence = sentence + ' ';
  let word = '';
  let newSentence = '';
  for (let count = 0; count < sentence.length; count++){
    if (sentence[count] === ' '){
      // console.log(word);
      if (word === 'smile'){
        word = ':D';
      } else if (word === 'grin'){
        word = ':)';
      } else if (word === 'sad'){
        word = ':(';
      } else if (word === 'mad'){
        word = ':P';
      }
      newSentence = newSentence + word + ' ';
      word = '';
    } else {
      word = word + sentence[count];
    }
  }
  console.log(newSentence);
}

// emotify('Make me sad');

// Exercise: How Many Vowels
function countVowels(string){
  let noOfvowels = 0;
  for (let count = 0; count < string.length; count++){
    if (string[count] === 'a' || string[count] === 'e' || string[count] === 'i' ||
    string[count] === 'o' || string[count] === 'u') {
      noOfvowels++;
      // console.log(string[count]);
    }
  }

  return noOfvowels;
}

// console.log(countVowels('Celebration'))

// Exercise: Reverse the case
function reverseCase(string){
  let newString = '';
  for (let count = 0; count < string.length; count++){
    if (string[count] === string[count].toUpperCase()){
      newString += string[count].toLowerCase();
    } else {
      newString += string[count].toUpperCase();
    }
  }

  return newString;
}

console.log(reverseCase('Happy Birthday'));
console.log(reverseCase('MANY THANKS'));
console.log(reverseCase('SpOnTanNeOuS'));