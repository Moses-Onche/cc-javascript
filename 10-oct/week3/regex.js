let text = "Visit W3schools";
let n1 = text.search("w3schools");
let n2 = text.search(/w3schools/i);
// console.log(n1);

let song = "Twinkle Twinkle little star, how I wonder what you are."
let p = song.replace("star", "sun");
// console.log(p);

let q1 = song.replace(/twinkle/i, "shiny");
let q2 = song.replace(/twinkle/ig, "shiny");
console.log(q2);

/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/
