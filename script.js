// Assignment Code

var enter; 
var confirmNum
var confirmChar
var confirmUpper
var confirmLower

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


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


}
 




