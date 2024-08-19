let firstNum = document.getElementsByClassName('form-container')[0].children[2];
let secondNum = document.getElementsByClassName('form-container')[0].children[4];
let submit = document.getElementsByClassName('form-container')[0].children[5].children[0];
let answer = document.getElementsByClassName('form-container')[0].children[6];

submit.addEventListener('click', function(){
  sum = Number(firstNum.value) + Number(secondNum.value);
  answer.textContent = 'Answer: ' + sum;
})