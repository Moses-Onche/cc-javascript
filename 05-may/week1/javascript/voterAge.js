let age = Number(prompt('Type in your age:'));
let nationality = prompt('What country are you from?');

if (age >= 18 && nationality === 'Nigeria' || nationality === 'nigeria'){
  alert('Yes you can vote.')
} else {
  alert('No, you cannot vote')
}
