function myGreeting(message){
  return console.log(message);
}

myGreeting("Hello");
myGreeting("Today is Monday!");

function addNumbers(firstNumber, secondNumber){
  return console.log(firstNumber + secondNumber);
}

addNumbers(3, 4);

let number = 5;
function increase(){
  let anotherNumber = 2;
  return anotherNumber;
}

// anotherNumber + 1;

console.log(increase());
// console.log(anotherNumber);

function toCelcius(temperature){
  return (5/9) * (temperature - 32);
}

let tempValue = 212;
let answer = "The temperature value " + tempValue + " is " + toCelcius(tempValue) + " in celcius";
console.log(answer);