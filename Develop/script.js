// Assignment Code
var generateBtn = document.querySelector("#generate");



var passCase = "";

var includeLower = false;
var includeUpper = false;

var minPassLength = 8;
var maxPassLength = 128;

var passLength = 0;

var includeNum = false;
var includeSpec = false;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specChar = ["&", "%", "!", "@", "#"];




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

function generatePassword(){

  var genPassword = "";


  //ask for critera

  askLength();
  askCase();
  askSpecialNum();

  if(includeLower == false && includeUpper == false && includeSpec == false && includeNum == false){ //if nothing is true
    alert("You need to include at least one type of character!");
  }
  else{
    for (var i = 0; i < passLength; i++){ //iterates through password length 

      if(includeNum == true && includeSpec == true){ //both numbers and special characters
        var ran = Math.floor(Math.random() * 3);
  
        if(ran == 0 && includeLower == true || includeUpper == true){
          genPassword+=randomLetter();
        }else if(ran == 1){
          genPassword+=randomChar();
        }else if(ran == 2){
          genPassword+=randomNum();
        }
      }
      else if(includeNum == true && includeSpec == false){ //only numbers 
        var ran = Math.floor(Math.random() * 2);
  
        if(ran == 0 && includeLower == true || includeUpper == true){
          genPassword+=randomLetter();
        }else if(ran == 1){
          genPassword+=randomNum();
        }
    
      }
      else if(includeNum == false && includeSpec == true){ //only special characters
        var ran = Math.floor(Math.random() * 2);
  
        if(ran == 0 && includeLower == true || includeUpper == true){
          genPassword+=randomLetter();
        }else if(ran == 1){
          genPassword+=randomChar();
        }    
      }
      else{ //only letters
        genPassword+=randomLetter();
      }
      
    }
  }
  



    return genPassword;
}

function askLength(){

  //if length fits criteria
    while(!(passLength >= minPassLength && passLength <= maxPassLength)){ //while passLength is not within 8 - 128
      passLength = parseInt(prompt("Type length of password from 8 to 128"));
    }
    
    console.log("asked for length");
}

function askCase(){

  var doneAsking = false;

  while (!doneAsking){

    var userInput = prompt("include lowercase? y/n").toLowerCase();

    if(userInput == "y"){

      includeLower = true;
      doneAsking = true;

    }
    else if(userInput == "n"){

      includeLower = false;
      doneAsking = true;

    }
    else if(userInput != "y" && userInput != "n"){
      doneAsking = false;
    }
  }

  var doneAsking = false;

  while (!doneAsking){

    var userInput = prompt("include uppercase? y/n").toLowerCase();

    if(userInput == "y"){
      includeUpper = true;
      doneAsking = true;
    }
    else if(userInput == "n"){

      includeUpper = false;
      doneAsking = true;
      
    }
    else if(userInput != "y" && userInput != "n"){
      doneAsking = false;
    }
  }
  
  console.log("asked for case");
}

function askSpecialNum(){

  

  var ans = prompt("include numbers? y/n");

  if(ans.toLowerCase() == "y"){
    includeNum = true;
  }

  var ans = prompt("include special characters? y/n");

  if(ans.toLowerCase() == "y"){
    includeSpec = true;
  }

  console.log("ased for special characters");
}

function validateAns(){

  if(passCase == "lowercase"){ //sets alphabet to case
    for(var i = 0; i < alphabet.length; i++)
      alphabet[i] = alphabet[i].toLowerCase();
  }
  else{
    for(var i = 0; i < alphabet.length; i++)
      alphabet[i] = alphabet[i].toUpperCase();
  }
}

function randomLetter(){
  var ran = Math.floor(Math.random() * alphabet.length); //gets random index from alphabet

  var randomLetter = alphabet[ran]; //stores random letter at index to var

  var ran = Math.floor(Math.random() * 2); //gets random between 0 and 1, used to choose either upper or lower case if both are true

  if(ran == 0 && includeLower == true){
    randomLetter = randomLetter.toLowerCase();
    console.log("LOWER!" + randomLetter);
  }
  else if(ran == 0 && includeLower == false){
    randomLetter = randomLetter.toUpperCase();
  }
  
  if(ran == 1 && includeUpper == true){
    randomLetter = randomLetter.toUpperCase();
    console.log("UPPER!" + randomLetter);
  }
  else if(ran == 1 && includeUpper == false){
    randomLetter = randomLetter.toLowerCase();
  }

  return randomLetter;
}

function randomChar(){
  var ran = Math.floor(Math.random() * specChar.length);

  return specChar[ran];
}

function randomNum(){
  var ran = Math.floor(Math.random() * 10);

  return ran;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
