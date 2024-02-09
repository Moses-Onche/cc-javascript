const number = prompt("Type a number");
let message;

if (number % 2 === 0){
  message = number + " is even";
} else {
  message = number + ' is odd';
}

document.write('<h1>' + message + '</h1>')