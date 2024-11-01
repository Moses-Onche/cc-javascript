let btn = document.querySelector("button");
let input = document.querySelector("#search");
let output = document.querySelector("#capital");
let dropDown = document.querySelector("#dropdown");

const nigeriaStatesAndCapitals = {
  "Abia": "Umuahia",
  "Adamawa": "Yola",
  "Akwa Ibom": "Uyo",
  "Anambra": "Awka",
  "Bauchi": "Bauchi",
  "Bayelsa": "Yenagoa",
  "Benue": "Makurdi",
  "Borno": "Maiduguri",
  "Cross River": "Calabar",
  "Delta": "Asaba",
  "Ebonyi": "Abakaliki",
  "Edo": "Benin City",
  "Ekiti": "Ado Ekiti",
  "Enugu": "Enugu",
  "Gombe": "Gombe",
  "Imo": "Owerri",
  "Jigawa": "Dutse",
  "Kaduna": "Kaduna",
  "Kano": "Kano",
  "Katsina": "Katsina",
  "Kebbi": "Birnin Kebbi",
  "Kogi": "Lokoja",
  "Kwara": "Ilorin",
  "Lagos": "Ikeja",
  "Nasarawa": "Lafia",
  "Niger": "Minna",
  "Ogun": "Abeokuta",
  "Ondo": "Akure",
  "Osun": "Osogbo",
  "Oyo": "Ibadan",
  "Plateau": "Jos",
  "Rivers": "Port Harcourt",
  "Sokoto": "Sokoto",
  "Taraba": "Jalingo",
  "Yobe": "Damaturu",
  "Zamfara": "Gusau",
  "FCT": "Abuja"
};



btn.addEventListener("click", function(){

  // Convert user input into a regular expression
  let regInput = new RegExp(input.value, "i");
  let capital = "";

  // Hide the dropdown menu
  dropDown.style.display = "none";

  localStorage.setItem("first", input.value)
  dropDown.children[2].innerHTML = localStorage.getItem("first")

  // Use regex to search for the capital
  for (let state in nigeriaStatesAndCapitals){
    if (state.search(regInput) != -1){
      capital = nigeriaStatesAndCapitals[state];
    }
  }

  // If state is found, write capital to the page
  if (capital == ""){
    output.innerHTML = "State not found."
  } else {
    output.innerHTML = capital;
  }
})

// Display dropdown menu and hide capital
input.addEventListener("click", function(){
  output.innerHTML = "";
  dropDown.style.display = "block";
});

// Hide dropdown menu for input
input.addEventListener("input", function(){
  dropDown.style.display = "none";
});