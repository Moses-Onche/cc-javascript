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

const fan = {
  color: 'black',
  type: 'standing',
  isRechargable: false,
  noOfBlades: 3,
  adjustableHeight: true,
}

const television = {}
television['type'] = 'flatscreen';
television['size'] = 55;
television['color'] = 'silver';
television['make'] = 'StarTimes';

// console.log(table.isFoldable);

table['colorOfLegs'] = 'grey';
table['width'] = 1.2;

// console.log(table.colorOfLegs + ' ' + table.material + ' ' + table.width)

for (item in table) {
  console.log(table[item]);
}

console.log('\n\n')

for (properties in fan) {
  console.log(fan[properties]);
}

console.log('\n\n')

for (item in television) {
  console.log(television[item])
}

