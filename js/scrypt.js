const screen = document.querySelector("#screen");
const buttonAC = document.querySelector("#AC");
const buttonC = document.querySelector("#C");
const buttonDivide = document.querySelector("#divide");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
const buttonMultiply = document.querySelector("#multiply");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const buttonSubtract = document.querySelector("#subtract");
const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const buttonAddition = document.querySelector("#adding");
const button0 = document.querySelector("#zero");
const buttonDot = document.querySelector("#dot");
const buttonEquals = document.querySelector("#equals");

let tempOperatorStorage = 0;
let number1 = 0;
let number2 = 0;
let operator = 0;
let result = 0;
let numberBeingInputted = 0;
let dotHasBeenUsed = 0;
let number1FirstUse = 0;
let number2FirstUse = 0;
let toLong = 0;

function getlength(number) {
  String(number).replace(".", "").length;
  return number.toString().length;
}

function addToNumber(toAdd) {
  if (getlength(number1) >= 10 || getlength(number2) >= 10) {
    toLong = 1;
  }
  if (toLong == 1) {
    tempOperatorStorage = operator;
    operator = 10;
  }
  if (operator == 0) {
    if (number1FirstUse == 1) {
      number1 = concatNumbers(number1, toAdd);
    } else {
      number1 = toAdd;
      number1FirstUse = 1;
    }
  }
  if (operator == 1 || operator == 2 || operator == 3 || operator == 4) {
    if (number2FirstUse == 1) {
      number2 = concatNumbers(number2, toAdd);
    } else {
      number2 = toAdd;
      number2FirstUse = 1;
    }
  }
  if (operator == 10) {
    operator = tempOperatorStorage;
  }
}

function evaluateCalculation() {
  if (operator == 1) {
    number1 = number1 + number2;
    operator = 0;
    number2 = 0;
  }
  if (operator == 2) {
    number1 = number1 - number2;
    operator = 0;
    number2 = 0;
  }
  if (operator == 3) {
    number1 = number1 / number2;
    operator = 0;
    number2 = 0;
  }
  if (operator == 4) {
    number1 = number1 * number2;
    operator = 0;
    number2 = 0;
  }
  number1 = number1.toFixed(3);
  return number1;
}

function concatNumbers(a, b) {
  together = `${a}${b}`;
  together = Number(together);
  if (isNaN(together) == false) {
    return together;
  } else {
    alert("something went wrong");
  }
}

function displayOnScreen() {
  if (operator == 0) {
    screen.textContent = number1;
  }
  if (operator == 1 || operator == 2 || operator == 3 || operator == 4) {
    screen.textContent = number2;
  }
}

function buttonACPressed() {
  number1 = 0;
  number2 = 0;
  operator = 0;
  result = 0;
  numberBeingInputted = 0;
  dotHasBeenUsed = 0;
  number1FirstUse = 0;
  number2FirstUse = 0;
  displayOnScreen("");
}

buttonAC.addEventListener("click", buttonACPressed);

function buttonCPressed() {
  if (operator == 0) {
    number1 = Math.floor(number1 / 10);
  }
  if (operator == 1 || operator == 2 || operator == 3 || operator == 4) {
    number2 = Math.floor(number2 / 10);
  }
  displayOnScreen();
}

buttonC.addEventListener("click", buttonCPressed);

function buttonDividePressed() {
  if (operator == 0) {
    operator = 3;
    displayOnScreen();
  } else {
    evaluateCalculation();
    operator = 3;
  }
  toLong = 0;
}

buttonDivide.addEventListener("click", buttonDividePressed);

function button7Pressed() {
  addToNumber(7);
  displayOnScreen();
}

button7.addEventListener("click", button7Pressed);

function button8Pressed() {
  addToNumber(8);
  displayOnScreen();
}

button8.addEventListener("click", button8Pressed);

function button9Pressed() {
  addToNumber(9);
  displayOnScreen();
}

button9.addEventListener("click", button9Pressed);

function buttonMultiplyPressed() {
  if (operator == 0) {
    operator = 4;
    displayOnScreen();
  } else {
    evaluateCalculation();
    operator = 4;
  }

  toLong = 0;
}

buttonMultiply.addEventListener("click", buttonMultiplyPressed);

function button4Pressed() {
  addToNumber(4);
  displayOnScreen();
}

button4.addEventListener("click", button4Pressed);

function button5Pressed() {
  addToNumber(5);
  displayOnScreen();
}

button5.addEventListener("click", button5Pressed);

function button6Pressed() {
  addToNumber(6);
  displayOnScreen();
}

button6.addEventListener("click", button6Pressed);

function buttonSubtractPressed() {
  if (operator == 0) {
    operator = 2;
    displayOnScreen();
  } else {
    evaluateCalculation();
    operator = 2;
  }
  toLong = 0;
}

buttonSubtract.addEventListener("click", buttonSubtractPressed);

function button1Pressed() {
  addToNumber(1);
  displayOnScreen();
}

button1.addEventListener("click", button1Pressed);

function button2Pressed() {
  addToNumber(2);
  displayOnScreen();
}

button2.addEventListener("click", button2Pressed);

function button3Pressed() {
  addToNumber(3);
  displayOnScreen();
}

button3.addEventListener("click", button3Pressed);

function buttonAdditionPressed() {
  if (operator == 0) {
    operator = 1;
    displayOnScreen();
  } else {
    evaluateCalculation();
    operator = 1;
  }
  toLong = 0;
}

buttonAddition.addEventListener("click", buttonAdditionPressed);

function button0Pressed() {
  addToNumber(0);
  displayOnScreen();
}

button0.addEventListener("click", button0Pressed);

function buttonDotPressed() {
  if (dotHasBeenUsed == 0) {
    addToNumber(".");
    dotHasBeenUsed = 1;
  }
}

buttonDot.addEventListener("click", buttonDotPressed);

function buttonEqualsPressed() {
  number1 = evaluateCalculation();
  displayOnScreen();
  if (number1 == Infinity) {
    screen.textContent = "you cant divide by 0";
  }
}

buttonEquals.addEventListener("click", buttonEqualsPressed);
