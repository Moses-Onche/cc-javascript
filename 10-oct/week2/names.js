let names = [];

for (;;){
  let input = prompt('Type in a name\nType "done" to exit the program');
  if (input === 'done'){
    break;
  } else {
    names.push(input);
  }
}

alert(names);