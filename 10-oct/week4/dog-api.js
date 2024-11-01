async function dogImage(){
  let url = "https://dog.ceo/api/breeds/image/random";
  let response = await fetch(url);
  let dogImage = await response.json();
  // console.log(dogImage.message);

  let dogTag = document.querySelector("img");
  // console.log(dogTag);
  dogTag.setAttribute("src", dogImage.message);
};

let btn = document.querySelector("button");

btn.addEventListener("click", dogImage);