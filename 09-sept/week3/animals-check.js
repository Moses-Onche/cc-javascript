let animals = ['lion', 'tiger', 'goat', 'fish', 'elephant'];

let input = prompt('Type in an animal to search for');
// alert(input);
let searchText = new RegExp(input, 'i');
alert(searchText);
for (let i = 0; i < animals.length; i++){
  if ('rat' === animals[i] ){
    // alert('rat');
    break;
  } else {
    // alert('no rat')
    break;
  }
}