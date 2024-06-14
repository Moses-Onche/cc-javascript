let text = "Visit W3Schools";
let n = text.search('w3Schools');
// console.log(n);
// console.log('Visit W3Schools'.search(/w3schools/ig));

let string = 'Make me smile and we can all smile together';
let word = string.replace(/\s/ig, ':D');
// console.log(word);

// console.log(/e/.exec('The best things in life are free.'));

// Convert user input to regular expression
/*
let input = prompt('Input your name:');
let search = new RegExp(input, 'ig');
alert(search);
*/

function isLastCharacterN(string){
  if (string[string.length - 1] === 'n'){
    return true;
  } else {
    return false;
  }
}

// console.log(isLastCharacterN('Aiden'))
// console.log(isLastCharacterN('Piet'))