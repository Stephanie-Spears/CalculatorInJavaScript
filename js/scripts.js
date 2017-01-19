var getInput = function() {
  var getChoice = parseInt(prompt("Choose operation by index option. \n1. + \n2. - \n3. / \n4. * \n"));
  var getNumber1 = parseInt(prompt("Enter first number:"));
  var getNumber2 = parseInt(prompt("Enter second number: "));
  return [getChoice, getNumber1, getNumber2];
};

var userInputArray = getInput();
var userChoice = userInputArray[0];
var num1= userInputArray[1];
var num2= userInputArray[2];
var lowRange = 1;
var highRange = 4;
var calculateNum = [
  function (num1, num2) {return num1 + num2;},
  function (num1, num2) {return num1 - num2;},
  function (num1, num2) {return num1 / num2;},
  function (num1, num2) {return num1 * num2;},
];

// input allows for decimals (ie. 1.2 is accepted. Specify non-floating point? setPrecision funct?)
function checkInput(userInputArray) {
  for (var i = 0; i < userInputArray.length; i++) {
    if (isNaN(userInputArray[i])) {
      // alert("user input of '" + userInputArray[i] + "[" + i + "]" + "' is NOT A NUMBER");
      return false;
    }
    else if (i === 0) {
      if (lowRange > userInputArray[i] || userInputArray[i] > highRange) {
        // alert("user input of '" + userInputArray[i] + "' is not within options range of " + lowRange + " and " + highRange);
        return false;
      }
    }
    else if (i === (userInputArray.length - 1)) {
      // alert("Each item in the array has been validated");
      return true;
    }
  }
}

var cleanInput = checkInput(userInputArray);

while (cleanInput === false) {
  // alert("userInput returned false");
  alert("invalid choice. TRY AGAIN!");
  var userInputArray = getInput();
  var num1= userInputArray[1];
  var num2= userInputArray[2];
  var userChoice = userInputArray[0];
  var cleanInput = checkInput(userInputArray);
}
if(cleanInput === true) {
  // alert("User input has been validated");
}
var calcSymb = ["+", "-", "/", "*"];

var displayCalcOperation = function (num1, num2) {
  var numValue;
  alert(num1 + calcSymb[userChoice-1] + num2 + " = " + (numValue = calculateNum[userChoice-1](num1, num2)));
};

displayCalcOperation(num1, num2);

$(function() {
  $(".secret").click(function() {
    $(".clickable").toggle();
  });
});
