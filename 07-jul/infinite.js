let magicNumber = 8;

while (true){
  let input = Number(prompt(`Guess and type in any number from 1 to 10\n(Type 'close' to exit)`));
  if (input === 'close'){
    break;
  } else {
    if (input === magicNumber){
      alert('Correct, ' + input + ' is the magic number');
      break;
    } else {
      alert('Wrong, try again');
    }
  }
}       
