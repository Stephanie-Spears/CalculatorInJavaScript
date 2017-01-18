var getInput = function() {
  var getChoice = parseInt(prompt("Choose operation by index option. \n1. + \n2. - \n3. / \n4. * \n"));
  var getNumber1 = parseInt(prompt("Enter first number:"));
  var getNumber2 = parseInt(prompt("Enter second number: "));
  return [getNumber1, getNumber2, getChoice];
};

var userInputArray = getInput();

var num1= userInputArray[0]; //first number i enter
var num2= userInputArray[1]; //second number i enter
var userChoice = userInputArray[2];
alert("userInputArray[0] = " + num1);
alert("userInputArray[1] = " + num2);
alert("userInputArray[2] = " + userChoice);


alert(userInputArray);

// if (userInputArray[2] === 1)
// {
//   var add = function(num1, num2) {
//     alert(num1 + " + " + num2 + " = ");
//     return num1 + num2;
//   };
// }
// else if (userInputArray[3] === 2) {
//   var subtract = function(num1, num2) {
//     alert(num1 + " - " + num2 + " = ");
//     return num1 - num2;
//   };
// }
// else if (userInputArray[3] === 3) {
//   var divide = function(num1, num2) {
//     alert(num1 + " / " + num2 + " = ");
//     return num1 / num2;
//   };
// }
// else if (userInputArray[3] === 4) {
//   var multiply = function(num1, num2) {
//     alert(num1 + " x " + num2 + " = ");
//     return num1 * num2;
//   };
// }



//
//
// result(add);
// result(subtract);
// result(divide);
// result(multiply);
//
//
// var result = add(num1, num2);
// alert(result);
// var result = subtract(num1, num2);
// alert(result);
// var result = divide(num1, num2);
// alert(result);
// var result = multiply(num1, num2);
// alert(result);


// var number1 = parseInt(prompt("Enter a number:"));
// var getNumber2 = parseInt(prompt("Enter another number:"));

// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var result = subtract(number1, number2);
// alert(result);
