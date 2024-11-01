let btn = document.querySelector("button");
let allTiles = document.querySelectorAll(".tile");

let num = 900000;
btn.addEventListener("click", function(){
  let tile1 = Math.trunc(Math.random() * num);
  let tile2 = Math.trunc(Math.random() * num);
  let tile3 = Math.trunc(Math.random() * num);
  let tile4 = Math.trunc(Math.random() * num);
  
  allTiles[0].innerHTML = "#" + tile1;
  allTiles[1].innerHTML = "#" + tile2;
  allTiles[2].innerHTML = "#" + tile3;
  allTiles[3].innerHTML = "#" + tile4;

  allTiles[0].style.backgroundColor = "#" + tile1;
  allTiles[1].style.backgroundColor = "#" + tile2;
  allTiles[2].style.backgroundColor = "#" + tile3;
  allTiles[3].style.backgroundColor = "#" + tile4;
})

// console.log("Tile 1 - " + tile1 +
//   "\nTile 2 - " + tile2 +
//   "\nTile 3 - " + tile3 +
//   "\nTile 4 - " + tile4
// );