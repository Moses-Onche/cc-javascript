async function displayDog() {
  let url = 'https://dog.ceo/api/breeds/image/random';
  let response = await fetch(url);
  let dogPic = await response.json();

  let img = document.getElementById('picture');
  let dogName = document.getElementById('name');
  img.setAttribute('src', dogPic.message);

  const names = [
    'Bingo',
    'Cherry',
    'Jack',
    'Lion',
    'Rocky',
    'Cooper',
    'Daisy',
    'Max',
    'Bella',
    'Buddy'
  ]

  let i = Math.round(Math.random() * 10);
  dogName.innerHTML = names[i];
}

displayDog();