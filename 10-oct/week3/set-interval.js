let heading = document.querySelector("h1");
// console.log(heading);

function updateHeading(){
  let count = 0;
  let id = setInterval(five, 2000);
  function five(){
    if (count < 5){
      heading.innerHTML += " HURRAY!";
      count++;
    } else {
      clearInterval(id);
    }
  }
}

updateHeading();

// setTimeout(updateHeading, 3000);

// let end = setInterval(updateHeading, 2000);

