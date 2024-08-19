let add = document.getElementsByTagName('h1')[0]
let boxClose = document.getElementById('box-close');
let box = document.getElementsByClassName('container-add')[0];
let button = document.querySelector('button');
let webName = document.querySelectorAll('input')[0];
let webUrl = document.querySelectorAll('input')[1];
let popUpBox = document.getElementsByClassName('display-url')[0];

boxClose.addEventListener('click', function(){
  box.style.display = 'none';
})

add.addEventListener('click', function(){
  box.style.display = 'block';
})

button.addEventListener('click', function(){
  // console.log(webName.value);
  // console.log(webUrl.value);
  if (webName.value === ''){
    alert('Please type in the name of the site');
  } else if (webUrl.value === ''){
    alert('Please type in the web address');
  } else if (webName.value === '' && webUrl.value === ''){
    alert('Please fill in both fields')
  } else {
    // Create h1 element, anchor element and icon element
    let popup = document.createElement('h1');
    let link = document.createElement('a');
    let closeIcon = document.createElement('i');

    // Change the src attribute and innerHTML to webName and webUrl
    link.setAttribute('href', 'https://' + webUrl.value);
    link.setAttribute('target', '_blank');
    link.innerHTML = webName.value;
    closeIcon.setAttribute('class', 'fas fa-times');

    // Append anchor link and close icon to the popup
    popup.appendChild(link);
    popup.appendChild(closeIcon);

    // Append the popup to the display-url div
    popUpBox.appendChild(popup);

    webName.value = ''
    webUrl.value = ''

    closeIcon.addEventListener('click', function(){
      popUpBox.removeChild(popup);
    })
  }
})

