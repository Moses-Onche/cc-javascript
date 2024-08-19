// for (let count = 2; count <= 3; count = count + 2){
//   console.log('Hello');
// }

// for (count = 10; count >= 1; count = count - 1){
//   console.log(count);
//   // console.log('Happy New Year!');
// }
// console.log('Happy New Year!');

// let count = 1;

// while (count < 10){
//   console.log('This is a while loop');
//   count = count + 1;
// }

while (true) {
  // INPUT
  let number = prompt("Type in a number\nType 'close' to end the program");
  let message = "";

  if (number === 'close' || number === 'Close'){
    break;
  }
  // PROCESSING
  if (number % 2 == 0) {
    message = "This is an even number";
  } else {
    message = "This is an odd number";
  }

  // OUTPUT
  alert(message);
}
