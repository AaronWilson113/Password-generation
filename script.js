// Assignment Code

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //AKA lowercase. need to add uppercase
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


var enter;
var logNumber;
var logLowercase;
var logUppercase;
var logSymbol;

var choices


var toUpper = function (x) {
  return x.toUpperCase();
};

Upperletters = letters.map(toUpper);


//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passwordLength = prompt("what length would you like your password to be bb girl?")

  var Numbers = confirm("Will this contain numbers?");

  var Symbols = confirm("Will this contain special characters?");

  var Uppercase = confirm("Will this contain Uppercase letters?");

  var Lowercase = confirm("Will this contain Lowercase letters?");
  
  var minimumCount = 0;
  
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSymbols = "";

  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSymbols: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

if (Numbers === true) {
  minimumNumbers = functionArray.getLowerCases();
  minimumCount++;

}

if (Symbols === true) {
  minimumSymbols = functionArray.getSymbols();
  minimumCount++;

}

if (Uppercase === true) {
  minimumUpperCases = functionArray.getUpperCases();
  minimumCount++;

}

if (Lowercase === true) {
  minimumLowerCases = functionArray.getLowerCases();
  minimumCount++;

}

for (let i = 0 ; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += randomNumberPicked

}

};





