// Assignment Code
let generateBtn = document.querySelector("#generate");
function generatePassword() {
  // Let's set our length and character options to use for generating password
  let specialChars = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "?",
    ">",
    "<",
    ";",
    ":",
    "'",
    "|",
    "=",
    "+",
    "~",
    "`",
    "-",
    "_",
    ",",
    "/",
  ];
  let upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let emptyPassword = [];
  let charLength;
  // Write password to the #password input

  charLength = prompt("Choose the length of your password.");
  if (charLength < 8 || charLength > 128) {
    alert("Please choose a number between 8 and 128");
  } else {
    alert("Let's get started");
  }
  if (!charLength) {
    return;
  }

  let lower = confirm("Will the password include lowercase characters?");
  if (lower) emptyPassword.push(...lowercase);

  let upper = confirm("Will the password include uppercase characters?");
  if (upper) emptyPassword.push(...upperCase);

  let special = confirm("Will the password include special characters?");
  if (special) emptyPassword.push(...specialChars);

  let numeric = confirm("Will the password include numbers?");
  if (numeric) emptyPassword.push(...numbers);

  let finalPassword = " ";
  for (let i = 0; i < charLength; i++) {
    let key = [Math.floor(Math.random() * emptyPassword.length)];
    finalPassword += emptyPassword[key];
  }
  return finalPassword;
}
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
