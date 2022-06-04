// Assignment Code

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var enter; 
var confirmNum
var confirmChar
var confirmUpper
var confirmLower


//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  
  enter = parseInt(prompt("Choose a number, any number, between 8 and 128, go on dont be shy"));

  if (!enter) {
    alert("This needs a value silly");
  } else if (enter <8 || enter > 128) {
    enter = parseInt(prompt("Come on now you gotta pick a number between 8 and 128 not just any number"));
  }

  else {
    confirmNum = confirm("Would you like to add some numbers to your password?")
    confirmChar = confirm("How about some wacky symbols?")
    confirmUpper = confirm("Ok, ok, what about some UPPER CASE LETTERS?")
    confirmLower = confirm("One last choice I promise, are we ok with boring old lowercase letters?")
  };

  
  if (!confirmChar && !confirmNum && !confirmUpper && !confirmLower) {
    
    choices = alert("You must choose a criteria!");
  
  }

  else if (confirmChar && confirmNum && confirmUpper && confirmLower) {

    choices = character.concat(number, placeholder, placeholder2);
  
  }

  else if (confirmChar && confirmNum && confirmUpper) {
    
    choices = character.concat(number, placeholder2);
  
  }
  
  else if (confirmChar && confirmNum && confirmLower) {
    
    choices = character.concat(number, placeholder);
  
  }
  
  else if (confirmChar && confirmLower && confirmUpper) {
    
    choices = character.concat(placeholder, placeholder2);
  
  }
  
  else if (confirmNum && confirmLower && confirmUpper) {
    
    choices = number.concat(placeholder, placeholder2);
  
  }
 
  else if (confirmChar && confirmNum) {
    
    choices = character.concat(number);

  }

  else if (confirmChar && confirmLower) {
    
    choices = character.concat(placeholder);

  }

  else if (confirmChar && confirmUpper) {
    
    choices = character.concat(placeholder2);
  
  }

  else if (confirmLower && confirmNum) {
    
    choices = placeholder.concat(number);
  
  }
  
  else if (confirmLower && confirmUpper) {
    
    choices = placeholder.concat(placeholder2);

  }

  else if (confirmNum && confirmUpper) {
    
    choices = number.concat(placeholder2);

  }

  else if (confirmChar) {
    
    choices = character;

  }

  else if (confirmNum) {
    
    choices = number;

  }

  else if (confirmLower) {
    
    choices = placeholder;

  }

else if (confirmUpper) {
    
  choices = space.concat(placeholder2);

};

}
 




