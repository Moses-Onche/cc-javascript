/*
 * Classwork 1: Write a loop that goes from 1 - 10.
 * Display each loop count and break out of the loop
 * at the 7. Then display 'Loop count' at the end.
*/

// for (let i = 1; i <= 10; i++){
//   console.log(i);
//   if (i === 7){
//     break;
//   }
// }
// console.log('Loop break')

/* 
* Classwork 2: Write a loop that goes from 15 - 27. 
* Display each loop count and a string that shows 
* if it is odd of even.
*/

// let output = '';
// for (let i = 15; i <= 27; i++){
//   if (i % 2 === 0){
//     console.log(i + ' even');
//   } else {
//     console.log(i + ' odd')
//   }
// }

/* Classwork 3: Display the following in your console
* 5
* 4
* 2
* 1
* Middle
* 1
* 2
* 3
* 4
* 5
*/

for (let i = 5; i >= 1; i--){
  console.log(i);
}
console.log('Middle');
for (let i = 1; i <= 5; i++){
  console.log(i);
}