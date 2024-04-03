let phoneNumber = prompt("Please type in your phone number:\nTo exit, type close");
let message;

while (true) {
  if (phoneNumber === 'close' || phoneNumber === 'Close' || phoneNumber === 'CLOSE') {
    break;
  } else if (phoneNumber.length < 11) {
    phoneNumber = prompt(phoneNumber + " is less than 11 digits.\n Please type again.")
  } else if (phoneNumber.length > 11) {
    phoneNumber = prompt(phoneNumber + " is greater than 11 digits.\n Please type again.")
  } else {
    message = "The phone number is correct."
    break;
  }
}

document.write("<h1>" + message + "</h1>")