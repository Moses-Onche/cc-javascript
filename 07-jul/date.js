const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
if (currentDate.getHours() > 12){
console.log(currentDate.getHours() - 12 + 'pm')
}
// console.log(currentDate.getHours());
console.log(currentDate.getMinutes());