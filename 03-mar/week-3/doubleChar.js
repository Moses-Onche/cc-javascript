function doubleChar(text){
  let newText = "";
  
  for (let count = 0; count <= text.length - 1; count++){
    newText = newText + text[count];
    newText = newText + text[count];
  }
  console.log(newText);
}

doubleChar("This is a boy");