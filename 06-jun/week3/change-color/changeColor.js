let target = document.getElementById('text');
let christmas = document.getElementById('text2');

target.addEventListener('click', function(){
  target.style.color = 'green';
  christmas.style.color = 'red';
});

christmas.addEventListener('click', function(){
  target.style.color = 'red';
  christmas.style.color = 'green';
})
//