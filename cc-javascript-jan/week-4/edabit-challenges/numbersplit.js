function numberSplit(num){
  let answer1 = Math.floor(num / 2)
  let answer2 = Math.ceil(num / 2)

  let final = [answer1, answer2];
  return final;
}

console.log(numberSplit(11));