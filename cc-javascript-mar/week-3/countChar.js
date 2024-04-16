function charCount(character, string){
  let numberOfTimes = 0;
  for (let count = 0; count <= string.length - 1; count++){
    if (string[count] === character){
      numberOfTimes = numberOfTimes + 1;
    }
  }
  console.log(numberOfTimes);
}

charCount("b", "big fat bubble");