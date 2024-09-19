let containers = document.getElementsByClassName('all')

for (let i = 1; i < containers.length; i++) {
  let color = Math.trunc(Math.random() * 900000);
  containers[i].style.backgroundColor = '#' + color;
}