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
// Should make it immediately check input and only store the int in the array if it's valid...return false immediately, so user doesn't have to go through the motions of finishing input if the first num is wrong
function checkInput(userInputArray) {
  for (var i = 0; i < userInputArray.length; i++) {
    if (isNaN(userInputArray[i])) {
      alert("RAY SAYS user input of '" + userInputArray[i] + "[" + i + "]" + "' is NOT A NUMBER");
      return false;
    }
    else if (i === 0) {
      if (lowRange > userInputArray[i] || userInputArray[i] > highRange) {
        alert("RAY SAYS 'YA RETAAAD'ED OR SOMTHIN??" + "...and he says user input of '" + userInputArray[i] + "' is not within options range of " + lowRange + " and " + highRange);
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
    $( "#button1" ).click(function() {
        $( "#item1" ).toggle();
    });
});

$(function() {
    $( "#button2" ).click(function() {
        $( "#item2" ).toggle();
    });
});
$(function() {
    $( "#button3" ).click(function() {
        $( "#item3" ).toggle();
    });
});


// $(function() {
//     $( "#button" ).click(function() {
//         $( "#item2" ).toggle();
//     });
// });
// $(function() {
//     $( "#button" ).click(function() {
//         $( "#item3" ).toggle();
//     });
// });

// In case you are interested in a jQuery soluton:
//
// This is the HTML
//
// <a id="button" href="#">Show/Hide</a>
// <div id="item">Item</div>
// This is the jQuery script
//
// $( "#button" ).click(function() {
//     $( "#item" ).toggle();
// });
// You can see it working here:
//
// http://jsfiddle.net/BQUyT/
//
// If you don't know how to use jQuery, you have to use this line to load the library:
//
// <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
// And then use this line to start:
//
// <script>
// $(function() {
//     // code to fire once the library finishes downloading.
// });
// </script>
// So for this case the final code would be this:
//
// <script>
// $(function() {
//     $( "#button" ).click(function() {
//         $( "#item" ).toggle();
//     });
// });
// </script>
