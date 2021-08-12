var lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
var capitalAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numChar = "123456789".split("");
var specialChar = " !#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");

function passwordQuestions() {
  var start = prompt(
    "How many characters would you like your password to be? (Pick a number between 8 and 128)"
  );
  if (isNaN(start)) {
    alert("Please enter a numerical value");
    passwordQuestions();
  } else if (start < 8) {
    alert("Please enter a number higher than 8");
    passwordQuestions();
  } else if (start > 128) {
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

function randomizer(a) {
  var randomI = Math.floor(Math.random() * a.length);
  var randomE = a[randomI];

  return randomE;
}

function generatePassword() {
  var choices = passwordQuestions();
  var password = [];
  var characterList = [];
  var chosenChar = [];

  if (choices.lowerQuestion) {
    characterList = characterList.concat(lowerAlpha);
    chosenChar.push(randomizer(lowerAlpha));
  }
  if (choices.capitalQuestion) {
    characterList = characterList.concat(capitalAlpha);
    chosenChar.push(randomizer(capitalAlpha));
  }
  if (choices.numQuestion) {
    characterList = characterList.concat(numChar);
    chosenChar.push(randomizer(numChar));
  }
  if (choices.specialQuestion) {
    characterList = characterList.concat(specialChar);
    chosenChar.push(randomizer(specialChar));
  }

  for (var i = 0; i < choices.length; i++) {
    var computerChoices = randomizer(characterList);

    password.push(computerChoices);
  }

  for (var i = 0; i < chosenChar.length; i++) {
    password[i] = chosenChar[i];
  }

  return password.join("");
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

debugger;
