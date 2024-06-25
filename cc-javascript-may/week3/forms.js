// Array within an array
let num = [[1,2], [3,5]];
// console.log(num[1][1]);

// Array within an object
let sample = [
  {name: 'Jamiu', id: 12, school: 'Unilag'},
  {name: 'Jamiu', id: 20, school: ['OAU', 'Uniben', 'BUK']},
  {
    name: 'Jamiu',
    id: 46,
    school: [
      {
        North: ['BUK', 'ABU', 'Unimaid', 'FUTM'],
        West: ['Unilag', 'OAU', 'UI', 'Lautech'],
        East: ['UNN', 'EBSU' , 'ABSU', 'UniZik'],
        South: ['Uniport', 'UniCal', 'UniUyo', 'Delsu']
      }
    ]
  }
]

console.log(sample[2].school[0].West[2]);

// console.log(sample[1].school[1]);
// console.log(sample[2].school[0].North[1]);


let input = document.getElementsByTagName('input');
let name = document.getElementById('name');

function displayValue(){
  name.innerHTML = input[0].value;
}

// displayValue();