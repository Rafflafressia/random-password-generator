// Assignment Code
var generateBtn = document.querySelector("#generate");

//generatePassword function

function generatePassword() {

  window.alert("Let's generate a password! The optimal length for a password is a minimum of 8 characters to a maximum of 128 characters.")
  var charLength = window.prompt("Please enter how long your password should be. It should be a minimum of 8 characters to a maximum of 128 characters.")

  //user inputs a password between 8 and 128 to start the password generation process
  if (charLength >= 8 && charLength <= 128){
    //validates users input for ideal password length
    window.alert ("Thank you!")
  } else {
    window.alert ("This is not the proper length for a strong password, please try again!")
    return;
  }
  
  //all the possible characters, numbers and special characters used to generate password
    //All upper case characters
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //All lower case characters
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    //numerals from 0-9
  var numCase = "1234567890";
    //Special characters
  var specialCase = "!@#$%^&*)(";
  
  //User confirms which variables will be passed into final password
  var upperAlpha = window.confirm("Press OK to include uppercase letters.")
  var lowerAlpha = window.confirm("Press OK to include lowercase letters.")
  var numAlpha = window.confirm("Press OK to include numerals.")
  var specialAlpha = window.confirm("Press OK to include special characters.")

  //empty string to add user allowed characters
  var characters = "";

  //The users confirmations gets added into our empty characters string
  if (upperAlpha) characters += upperCase

  if (lowerAlpha) characters += lowerCase

  if (numAlpha) characters += numCase

  if (specialAlpha) characters += specialCase

  //if the user makes no inputs, a message displays asking the user to attempt the questionnaire again
  if (upperAlpha != true && lowerAlpha != true && numAlpha != true && specialAlpha != true) {
    window.alert("No valid inputs. Please restart the questionnaire and try again."); 
    return;
  }

  //an empty string to put the generated password into
  var generatedPassword = "";
  //a loop to create the password and passed into the generatedPassword variable
  for (i=0;i<charLength; i++){
    var randPass = Math.floor(Math.random() * characters.length) 
    generatedPassword += characters.charAt(randPass);
  }
  //print to console generated password - for debug purposes
  console.log("generated password" , generatedPassword);
  //returns final password generated to user
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
