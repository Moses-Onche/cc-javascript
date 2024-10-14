let fruit = prompt(`Select a fruit to buy:
  1. Apple
  2. Banana
  3. Orange
  4. Cherry
  5. Mangoes
  6. Pawpaw`);

switch (fruit) {
  case '1':
    alert('Apples cost N600 a fruit');
    break;
  case '2':
    alert('Banana costs N1,500 a bunch');
    break;
  case '3':
    alert('Oranges cost N30 a fruit');
    break;
  case '4':
    alert('Cherry costs N10 a fruit');
    break;
  case '5':
    alert('Mangoes cost N50 a fruit');
    break;
  case '6':
    alert('Pawpaw costs N900 a pod');
    break;
}
