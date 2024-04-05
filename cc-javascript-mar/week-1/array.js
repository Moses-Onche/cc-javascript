const cars = [];
cars.push("Honda");
cars.push("Mercedes");
cars.push("Lexus");
cars.push("Mazda");

cars.splice(2, 0, "Fiat");
console.log(cars.join("\n"));