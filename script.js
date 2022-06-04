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
  
  enter = parseInt(prompt("what length would you like your password to be bb girl?"));

  if (enter <8 || enter > 128) {

    enter = parseInt(prompt("You must choose between 8 and 128"));
 
  } else {
        logNumber = confirm("Will this contain numbers?");
        logSymbol = confirm("Will this contain special characters?");
        logUppercase = confirm("Will this contain Uppercase letters?");
        logLowercase = confirm("Will this contain Lowercase letters?");
    };
  
     if (logNumber && logSymbol && logUppercase && logLowercase) {

      choices = symbols.concat(numbers, letters, Upperletters);
     
     }  

     else if (logNumber && logSymbol && logUppercase) {

      choices = numbers.concat(symbols , Upperletters)
     
     }

     else if (logNumber && logSymbol && logLowercase) {

      choices = numbers.concat(symbols , Upperletters)
     
     }

     else if (logNumber && logLowercase && logUppercase) {

      choices = numbers.concat(letters , Upperletters)
     
     }

     else if (logSymbol && logLowercase && logUppercase) {

      choices = symbols.concat(letters , Upperletters)
     
     }

     else if (logSymbol && logLowercase) {

      choices = symbols.concat(letters)

     }

     else if (logSymbol && logUppercase) {

      choices = symbols.concat(Upperletters)

     }

     else if (logSymbol && logNumber) {

      choices = symbols.concat(numbers)

     }

     else if (logLowercase && logUppercase) {

      choices = letters.concat(Upperletters)

     }

     else if (logLowercase && logNumber) {

      choices = letters.concat(numbers)
     
     }

     else if (logUppercase && logNumber) {

      choices = Upperletters.concat(numbers)
     
     }

     else if (logSymbol) {

      choices = symbols;

     }

     else if (logNumber) {

      choices = numbers;

     }

     else if (logUppercase) {

      choices = Upperletters

     }

     else if (logLowercase) {

      choices = letters;

     }
    


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};




