var lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
var capitalAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numChar = "123456789".split("");
var specialChar = " !#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");

function passwordQuestions() {
  var start = prompt(
    "How many characters would you like your password to be? (Pick a number between 8 and 128)"
  );
  if (start < 8) {
    alert("Please enter a number higher than 8");
    passwordQuestions();
  }
  if (start > 128) {
    alert("Please enter a number smaller than 129");
    passwordQuestions();
  }
  var lowerQuestion = confirm("Would you like lower case characters?");
  var capitalQuestion = confirm("Would you like capital characters?");
  var numQuestion = confirm("Would you like numeric characters?");
  var specialQuestion = confirm("Would you like special characters?");

  if (
    lowerQuestion === false &&
    capitalQuestion === false &&
    numQuestion === false &&
    specialQuestion === false
  ) {
    alert("Please select at least one character type to continue");
    passwordQuestions();
  }

  var userQuestionChoice = {
    start: start,
    lowerQuestion: lowerQuestion,
    capitalQuestion: capitalQuestion,
    numQuestion: numQuestion,
    specialQuestion: specialQuestion,
  };
  return userQuestionChoice;
}

function passwordGenerator() {
  var choices = passwordQuestions();
  var password = [];
  var characterList = [];
  var chosenChar = [];
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
