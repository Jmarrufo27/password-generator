

// Button
var generateBtn = document.querySelector("#generate");
//button listener
generateBtn.addEventListener("click", createPassword);
// user inputs
var upperCase;  
var lowerCase;
var specialChar; 
var numberVals; 
//function to get user inputs
function createPassword() {

//arrays
var password = [];

var choiceSets = {
lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
upper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,],
schar: ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\", ", ",", "]", "^", "_", "`", "{", "|", "}", "~"]
}
  
  var passLength = prompt("How long would you like your password to be?", "8-128 Characters Please");
  
  if(passLength >= 8 && passLength <= 128) {
    var upperCase = confirm("Would you like your password to contain uppercase letters")
    var lowerCase = confirm("Would you like your password to contain lowercase letters")
    var specialChar = confirm("Would you like your password to contain special characters")
    var numberVals = confirm("Would you like numbers in your password?")
  }
    else { 
      alert("Password must be between 8 & 128 characters long")
      getVariables();
    }
    
    console.log("passlength is " + passLength + " do they want uc? " + upperCase + " do they want lc? " + lowerCase + " do they want sc? " + specialChar + " Do they want numbers? " + numberVals + "." )
    // used to pick random values from each array until passLength is reached
    function randomize() {
        let i=0  
        while (i < passLength) {
              if(upperCase && i < passLength){
                  password.push(choiceSets.upper[Math.floor(Math.random()*(choiceSets.upper.length))])
                  i++
              }
              if(lowerCase && i < passLength){
                  password.push(choiceSets.lower[Math.floor(Math.random()*(choiceSets.lower.length))])
                  i++
              }
              if(specialChar && i < passLength){
                  password.push(choiceSets.schar[Math.floor(Math.random()*(choiceSets.schar.length))])
                  i++
              }
              if(numberVals && i < passLength){
                  password.push(choiceSets.nums[Math.floor(Math.random()*(choiceSets.nums.length))])
                  i++
              }              
      }
  }
  randomize();
  var newPass = password.join("");
  console.log(newPass);
  document.getElementById("password").value = newPass;
}
