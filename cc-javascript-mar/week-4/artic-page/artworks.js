let button = document.getElementById('button');

// async function generalInfo() {
//   let url = "https://api.artic.edu/api/v1/artworks/" + id;
//   let response = await fetch(url);
//   let artInfo = await response.json();

//   console.log(artInfo.data.title);
// };

async function search() {
  let searchTerm = document.getElementById('search').value;
  searchTerm = searchTerm.replace(/ /g, "%20")
  let url = "https://api.artic.edu/api/v1/artworks/search?q=" + searchTerm;
  let response = await fetch(url);
  let searchResult = await response.json();

  // console.log(searchResult.data[0].api_link)
  // console.log(searchResult.data[1].api_link)
  // console.log(searchResult.data[2].api_link)
  let artURL = searchResult.data[0].api_link
  // return artURL
  console.log(artURL)
}

async function getImage(imageURL){
  // let id = "84559";
  let imageResponse = await fetch(imageURL);
  let imageInfo = await imageResponse.json();

  console.log(imageInfo.data.title);
  let imageId = imageInfo.data.image_id;
  
  let finalURL = "https://www.artic.edu/iiif/2/" + imageId + "/full/843,/0/default.jpg";
  document.getElementById('image').setAttribute("src", finalURL);
  document.getElementById('image').setAttribute("width", "300px");
}

// generalInfo();
// getImage();

button.addEventListener("click", search);