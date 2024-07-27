const cars = [
  'Mercedes',
  'BMW',
  'Toyota',
  'Honda',
  'Nissan',
  'Peugeot',
  'Audi'
]

cars[7] = 'Hyundai';
cars[5] = 'Ford';

// for (let count = 0; count < cars.length; count++){
//   if (cars[count] === 'Honda'){
//     console.log(cars[count]);
//     cars[count] = 'Ferrari';
//   }
// }
cars.push('Rolls Royce');
cars.push('Porsche');
console.log(cars.shift());
console.log(cars)


