// Assignment Code

var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";



//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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

      choices = symbols.concat(numbers, letters, UpperC);
  }  



    
  
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

