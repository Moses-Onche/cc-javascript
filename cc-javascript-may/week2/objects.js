// const date = new Date();

// const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
// console.log(date.getUTCMonth());

const table = {
  noOfLegs: 4,
  color: 'white',
  material: 'plastic',
  isFoldable: true,
  height: 0.7,
}

console.log(table.isFoldable);

table['colorOfLegs'] = 'grey';
table['width'] = 1.2;

console.log(table.colorOfLegs + ' ' + table.material + ' ' + table.width)
