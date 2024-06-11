// Exercise 1: The sum of two numbers
function addition(a, b){
  return a + b;
}

// Exercise 2: Convert minutes to seconds
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

// Exercise 3:

// Exercise 4: Increment from 1 to current number
function addUp(number){
  let sum = 0;
  for (let count = 1; count <= number; count++){
    sum = sum + count;
  }

  return sum;
}

console.log(addUp(4))
console.log(addUp(13))
console.log(addUp(600))

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

console.log(charCount('a', 'edabit'))
console.log(charCount('c', 'Chamber of secrets'))
console.log(charCount('b', 'big fat bubble'))