let firstNumber = Number(prompt("Type the first number"))
let secondNumber = Number(prompt("Type the second number"))
let thirdNumber = Number(prompt("Type the third number"))
let message;

if (firstNumber > secondNumber && firstNumber > thirdNumber){
  message = firstNumber + ' is the biggest number';
} else if (secondNumber > firstNumber && secondNumber > thirdNumber){
  message = secondNumber + ' is the biggest number'
} else {
  message = thirdNumber + ' is the biggest number'
}

document.write('<h1>' + message + '</h1>')