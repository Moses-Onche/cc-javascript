const names = [];

while (true){
  let input = prompt('Type in your name.\nType "done" to exit.');
  if (input === 'done'){
    break;
  }
  names.push(input);
}

alert(names + '\n' + 'Total: ' + names.length);