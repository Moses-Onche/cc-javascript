let button = document.getElementById('button');

async function search() {
  document.getElementById('image').setAttribute("src", './utils/roll-anim.gif');
  document.getElementById('image').setAttribute("width", "300px");
  
  let searchTerm = document.getElementById('search').value;
  searchTerm = searchTerm.replace(/ /g, "%20") // Remove whitespace and add %20 separator
  let url = "https://api.artic.edu/api/v1/artworks/search?q=" + searchTerm;
  let response = await fetch(url);
  let searchResult = await response.json();

  let artURL = searchResult.data[0].api_link
  getImage(artURL);
}

async function getImage(imageURL){
  

  let imageResponse = await fetch(imageURL);
  let imageInfo = await imageResponse.json();

  let imageId = imageInfo.data.image_id;
  
  let finalURL = "https://www.artic.edu/iiif/2/" + imageId + "/full/843,/0/default.jpg";
  document.getElementById('image').setAttribute("src", finalURL);
  document.getElementById('image').setAttribute("width", "300px");
}

button.addEventListener("click", search);