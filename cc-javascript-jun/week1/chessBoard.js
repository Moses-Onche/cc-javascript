let odd = ' # # # #';
let even = '# # # # ';

for (let count = 1; count <= 8; count++){
  if (count % 2 === 0){
    console.log(even);
  } else {
    console.log(odd);
  }
}