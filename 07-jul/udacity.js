let signIn = document.getElementById('sign-in');
let signUp = document.getElementById('sign-up');
let content = document.getElementsByClassName('content');
console.log(content[0]);
content[1].style.display = "none";

signIn.addEventListener('click', function(){
  this.style.backgroundColor = 'white';
  signUp.style.backgroundColor = '#a59f9f'
  content[0].style.display = 'block'
  content[1].style.display = 'none'
});

signUp.addEventListener('click', function(){
  this.style.backgroundColor = "white";
  signIn.style.backgroundColor = '#a59f9f'
  content[0].style.display = 'none'
  content[1].style.display = 'block'
})