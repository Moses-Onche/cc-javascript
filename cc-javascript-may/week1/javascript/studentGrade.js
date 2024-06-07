let score = Number(prompt('Type in your score:'))

if (score >= 70){
  alert('Grade: A');
} else if (score >= 60){
  alert('Grade: B');
} else if (score >= 50){
  alert('Grade: C')
} else if (score >= 40){
  alert('Grade: D')
} else {
  alert ('Failed');
}
