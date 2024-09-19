let age = prompt('Type in your age:');
let nationality = prompt('Type in your nationality');

if (age >= 18 && (nationality === "Nigerian" ||
   nationality === 'nigerian')){
  alert('You can vote.');
} else {
  alert('You are not eligible.');
}

let colorOfBoard = 'white';
let numberOfLegs = 4;
let isTvOn = true;