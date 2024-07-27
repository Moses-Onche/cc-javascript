function acceptIntoMovie(age, isSupervised){
  if (age < 15){
    if (isSupervised === true){
      return true;
    } else {
      return false
    }
  } else {
     return true;
  }
}

console.log(acceptIntoMovie(14, true))
console.log(acceptIntoMovie(14, false))
console.log(acceptIntoMovie(16, false))