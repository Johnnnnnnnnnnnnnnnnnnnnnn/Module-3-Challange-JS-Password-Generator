// Assignment code here
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// function to get user option
function getPasswordOptions() {

  var length = parseInt(prompt("How many characters do you want in your password?"));
  if (Number.isNaN(length)) {
    alert("password length must be a number.");
    return null;
  }

  if (length < 8) {
    alert("password length must be at least 8 characters.");
    return null;
  }

  if (length > 128) {
    alert("password length must be less than 128 characters.");
    return null;
  }

  var haveSpecialCharacters = confirm("click ok to include special characters");
  var haveNumericCharacters = confirm("click ok to include numeric characters");
  var haveLowerCaseCharacters = confirm("click ok to include lower case characters");
  var haveUpperCaseCharacters = confirm("click ok to include upper case characters");

  if (haveSpecialCharacters === false &&
    haveNumericCharacters === false &&
    haveLowerCaseCharacters === false &&
    haveUpperCaseCharacters === false
  ) {
    alert("please select at least 1 category of character.");
    return null;
  }

  var passwordOptions = {
    length: length,
    haveSpecialCharacters: haveSpecialCharacters,
    haveNumericCharacters: haveNumericCharacters,
    haveLowerCaseCharacters: haveLowerCaseCharacters,
    haveUpperCaseCharacters: haveUpperCaseCharacters,
  };

  return passwordOptions;

}

// function to get random element from array
function getRandom (arr) {
  var randIndex = Math.floor(Math.random()* arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// function to generate password
function generatePassword() {
  var options = getPasswordOptions();
  var results = [];
  var possibleCharacters = [];
  var guaranteeCharacters = [];

  if (!options) return null;

  if (options.haveSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteeCharacters.push(getRandom(specialCharacters));
  }

  if (options.haveNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteeCharacters.push(getRandom(numericCharacters));
  }

  if (options.haveLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteeCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.haveUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteeCharacters.push(getRandom(upperCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    results.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteeCharacters.length; i++) {
    results[i] = guaranteeCharacters[i];
  }

  return results.join("");

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
