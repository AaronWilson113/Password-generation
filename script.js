// Assignment Code

symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var enter; 
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;

var choices;

var toUpper = function (x) {
  return x.toUpperCase();
};

Upperc = letters.map(toUpper);



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

    choices = symbol.concat(number, letters, Upperc);
  
  }

  else if (confirmChar && confirmNum && confirmUpper) {
    
    choices = symbol.concat(number, Upperc);
  
  }
  
  else if (confirmChar && confirmNum && confirmLower) {
    
    choices = symbol.concat(number, letters);
  
  }
  
  else if (confirmChar && confirmLower && confirmUpper) {
    
    choices = symbol.concat(letters, Upperc);
  
  }
  
  else if (confirmNum && confirmLower && confirmUpper) {
    
    choices = number.concat(letters, Upperc);
  
  }
 
  else if (confirmChar && confirmNum) {
    
    choices = symbol.concat(number);

  }

  else if (confirmChar && confirmLower) {
    
    choices = symbol.concat(letters);

  }

  else if (confirmChar && confirmUpper) {
    
    choices = symbol.concat(Upperc);
  
  }

  else if (confirmLower && confirmNum) {
    
    choices = letters.concat(number);
  
  }
  
  else if (confirmLower && confirmUpper) {
    
    choices = letters.concat(Upperc);

  }

  else if (confirmNum && confirmUpper) {
    
    choices = number.concat(Upperc);

  }

  else if (confirmChar) {
    
    choices = symbol;

  }

  else if (confirmNum) {
    
    choices = number;

  }

  else if (confirmLower) {
    
    choices = letters;

  }

else if (confirmUpper) {
    
  choices = space.concat(Upperc);

};

var password = [];

for (var i = 0; i < enter; i++) {
  var pickchoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);

}

function UserInput(ps) {
  
  document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

}
 




