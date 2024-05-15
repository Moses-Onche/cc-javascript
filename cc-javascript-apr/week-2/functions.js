const square = function(x) {
  return x * x;
}

// console.log(square(12));
// console.log(square(3));
// console.log(square(7));
// console.log(square(10));

// Round a number to the nearest whole
// const roundTo = function(n, step) {
//   let remainder = n % step;
//   return n - remainder + (remainder < (step / 2) ? 0 : step);
// }

// console.log(roundTo(23, 10));

// let lightOn = false;
// console.log(lightOn ? "Yes" : "No")

function chicken(){
  return egg();
}

function egg(){
  return chicken();
}

console.log(chicken() + " came first!");