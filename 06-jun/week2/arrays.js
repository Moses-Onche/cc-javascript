// const numbers = [];
// numbers[0] = 1;
// numbers[1] = 2;
// numbers[2] = 5;
// console.log(numbers);

const fruits = ['apple', 'orange'];
// console.log(fruits);

// console.log(numbers[1]);
const test = [4, 7, 16, 8, 1, 5]
// console.log(test[3]);
// console.log(test[2]);
// console.log(test.length);
// console.log(test[test.length - 1]);

// console.log(test.length);
for (let i = 0; i < test.length; i++){
  // console.log(test[i]);
}

console.log('Original array ' + test);
test.push(274);
console.log('Add new element ' + test);
test.pop();
test.pop();
console.log('Delete the last two elements ' + test);