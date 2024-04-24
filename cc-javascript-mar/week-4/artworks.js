let id = "77544";

async function generalInfo() {
  let url = "https://api.artic.edu/api/v1/artworks/" + id;
  let response = await fetch(url);
  let artInfo = await response.json();

  console.log(artInfo.data.title);
};

async function getImage(){
  let imageURL = "https://api.artic.edu/api/v1/artworks/" + id + "?fields=id,title,image_id";
  let imageResponse = await fetch(imageURL);
  let imageInfo = await imageResponse.json();
  let imageId = imageInfo.data.image_id;
  
  let finalURL = "https://www.artic.edu/iiif/2/" + imageId + "/full/843,/0/default.jpg";
  document.getElementById('image').setAttribute("src", finalURL);
  document.getElementById('image').setAttribute("width", "300px");
}

generalInfo();
getImage();