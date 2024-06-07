// Input
let itemCost = Number(prompt('Type in the price of the item:'));
let moneyPaid = Number(prompt('Type in the amount paid:'));
let change;

// Processing
change = moneyPaid - itemCost;

// Output
// If the price of the item is --- and the money paid is ---, then the change is ---
alert('If the price of the item is ' + itemCost + ' and the money paid is ' + moneyPaid + ', then the change is ' + change);