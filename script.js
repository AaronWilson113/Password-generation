// Assignment Code

var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; //AKA lowercase. need to add uppercase
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

      choice = symbols.concat(letters , Upperletters)
     
     }

     else if (logSymbol && logLowercase) {

      choice = symbols.concat(letters)

     }

     else if (logSymbol && logUppercase) {

      choice = symbols.concat(Upperletters)

     }

     else if (logSymbol && logNumber) {

      choice = symbols.concat(numbers)

     }

     else if (logLowercase && logUppercase) {

      choice = letters.concat(Upperletters)

     }

     else if (logLowercase && logNumber) {

      choice = letters.concat(numbers)
     
     }

     else if (logUppercase && logNumber) {

      choice = Upperletters.concat(numbers)
     
     }

     else if (logSymbol) {

      choice = symbols;

     }

     else if (logNumber) {

      choice = numbers;

     }

     else if (logUppercase) {

      choice = Upperletters

     }

     else if (logLowercase) {

      choice = letters;
      
     }
    






    
  
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

