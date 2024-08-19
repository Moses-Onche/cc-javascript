let width = window.innerWidth;
let height = window.innerHeight;
let open = document.getElementsByTagName('button')[0];
let close = document.getElementsByTagName('button')[1];
let move = document.getElementsByTagName('button')[2];
// let testWindow = window.open('', '', width=600, height=900);

console.log('Browser width: '+ width + '\nBroswer height: ' + height);

open.addEventListener('click', function(){
  window.open();
})

close.addEventListener('click', function(){
  window.close();
})

move.addEventListener('click', function(){
  window.moveTo(500, 100);
})

alert('This is an alert box')
prompt('This is a prompt box')
confirm('This is a confirmation box')

