let image = document.getElementsByTagName('img')[0];
// console.log(image);

async function dogsApi(){
  let url = 'https://dog.ceo/api/breeds/image/random';
  let response = await fetch(url);
  let dogPhoto = await response.json();
  // console.log(dogPhoto);

  // image.style.transition = '3s'
  image.setAttribute('src', dogPhoto.message);
  
}

setInterval(dogsApi, 2000);