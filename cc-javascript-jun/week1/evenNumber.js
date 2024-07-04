// INPUT
let number = Number(prompt('Type in a number'));
let message = '';

// PROCESSING
if (number % 2 == 0){
  message = 'This is an even number';
} else {
  message = 'This is an odd number';
}

// OUTPUT
alert(message);