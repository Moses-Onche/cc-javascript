let add = document.getElementsByTagName('h1')[0]
let boxClose = document.getElementsByTagName('i')[0];
let box = document.getElementsByClassName('container-add')[0];

boxClose.addEventListener('click', function(){
  box.style.display = 'none';
})

add.addEventListener('click', function(){
  box.style.display = 'block';
})