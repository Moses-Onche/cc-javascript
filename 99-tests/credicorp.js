let form = document.getElementById('form');
let pagination = document.getElementById('pagination').children;
let subHeading = document.getElementsByTagName('h2')[0];
let current = 0; // Current form is the visible form div

// An array to change sub heading text content as form div changes
let sub = ['Personal Information', 'Credit Needs', 'Primary Employment', 'Secondary Employment', 'Face Capture(Optional)']

// When the page loads make the first form div visible and pagination color: green
form.children[current].style.display = 'block';
pagination[0].style.backgroundColor = "#08ddb8";

// A loop to run an event through each pagination list item
// and listen for a click
for (let i = 0; i < pagination.length; i++){
  pagination[i].addEventListener('click', function(){

    // Change the text in the subheading to match the clicked
    // pagination item using the 'sub' array
    subHeading.innerHTML = sub[i];

    // Everytime a pagination item is clicked,
    // run a loop to change background color of all items to ash
    for (let j = 0; j < pagination.length; j++){
      pagination[j].style.backgroundColor = "#eaeaea";
    }

    // Then run another loop to set the bg color
    // of all pagination items up to the one clicked on
    // to green
    for (let j = 0; j <= i; j++){
      pagination[j].style.backgroundColor = "#08ddb8";
    }
    
    // Finally, Change the current form div to display none to hide it
    // and the one matching the clicked pagination item
    // to display block making it visible
    form.children[current].style.display = 'none';
    form.children[i].style.display = 'block';
    current = i; // the selected one becomes the current one
  })
};