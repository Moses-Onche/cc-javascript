let darkText = document.getElementsByTagName('span')[1];
let sun = document.getElementsByTagName('span')[0].children[1];
let toggle = document.getElementsByTagName('span')[0].children[2];
let isDark = true;

toggle.addEventListener('click', function(){
  if (isDark){
    this.setAttribute('src', 'toggle-right.png')
    document.body.style.color = 'purple';
    document.body.style.backgroundColor = 'grey';
    darkText.textContent = 'Dark Mode'
    isDark = false;
  } else {
    this.setAttribute('src', 'toggle-left.png')
    document.body.style.color = 'red';
    document.body.style.backgroundColor = 'white';
    darkText.textContent = 'Light Mode'
    isDark = true;
  }
})
