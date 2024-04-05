const cars = [];
cars.push("Honda");
cars.push("Mercedes");
cars.push("Lexus");
cars.push("Mazda");

cars.splice(2, 0, "Fiat");
//console.log(cars.join("\n"));

// sort() method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
const evenNumbers = [6, 4, 2, 10, 8];
console.log(evenNumbers.sort());

// reverse() method
console.log(fruits.reverse());
console.log(evenNumbers.reverse());

document.write("<h1>This is Javascript</h1>");
document.write("<h2>" + newFruits +"</h2>");