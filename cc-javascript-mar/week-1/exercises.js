// The sum of two numbers

// let firstNumber = prompt("Type in the first number:");

// firstNumber = Number(firstNumber);
// alert(typeof firstNumber);
// let secondNumber = prompt("Type in the second number");
// secondNumber = Number(secondNumber);

// let answer = firstNumber + secondNumber;

// alert(firstNumber + " + " + secondNumber + " = " + answer);


// Convert minutes to seconds

// let minutes = 5;

// let answer = minutes * 60;

// alert(minutes + " minutes is equal to " + answer + " seconds.");


// let hour = 7;

// alert(hour + " hour")

// let arrayOfNumbers = [2, 4, 6, 8, 10];
// alert(arrayOfNumbers[0]);

// let finalMessage = "something" + " ";
// finalMessage = finalMessage + "is better than nothing."
// console.log(finalMessage);

// let age = prompt("Type in your age");
// age = Number(age);

// if (age >= 18 ){
//   alert("You are eligible to vote.");
// } else {
//   alert("You are too young");
// }

// let score = 65;

// if (score >= 70){
//   console.log("Your grade: A");
// } else if (score >= 60){
//   console.log("Your grade: B");
// } else if (score >= 50){
//   console.log("Your grade: C");
// } else {
//   console.log("Your grade: D");
// }

// let score = prompt("Type in your score");

// if (score >= 70){
//   alert("Your grade: A");
// } else if (score >= 60){
//   alert("Your grade: B");
// } else if (score >= 50){
//   alert("Your grade: C");
// } else {
//   alert("Your grade: D");
// }

for (let count = 0; count < 5; count++){
  console.log("Hello");
  if (count == 3){
    break;
  }
}

// let numArray = [];
// let input;

// for (let count = 0; count < 5; count++) {
//   input = prompt("Type in a number:");
//   numArray.push(input);
// }

// let count = 0;

// while (count < 5){
//   input = prompt("Type in a number:");
//   numArray.push(input);
//   count++;
// }
// let exitProgram = true;

// while (exitProgram){
//   input = prompt("Type in a number.\nType 'stop' to end the program.");
//   if (input === 'stop' || input === "Stop"){
//     exitProgram = false;
//   } else {
//     numArray.push(input);
//   }
// }

// alert(numArray);

// let number = 45;
// let answer = 0;

// for (let count = 1; count <= number; count++){
//   answer = answer + count;
// }

// console.log(answer);

// let newArray = [3, 5, 1, 7, 1000, 9, 2, 10, 43, 4, 5, 2, 6, 10, 23, 12034];
// let lowestNumber = 5;
// let highestNumber = 0;

// for (let count = 0; count <= newArray.length; count++){
//   if (newArray[count] < newArray[count + 1] && newArray[count] < lowestNumber){
//     lowestNumber = newArray[count];
//   }
//   if (newArray[count] > newArray[count + 1] && newArray[count] > highestNumber){
//     highestNumber = newArray[count];
//   }
// }

// console.log(lowestNumber);
// console.log(highestNumber);

// let arranged = newArray.sort(function(a, b){return a-b});
// console.log(arranged[0]);
// console.log(arranged[arranged.length-1]);