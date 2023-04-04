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

let number1 = 0;
let number2 = 0;
let operator = 0;
let result = 0;
let numberBeingInputted = 0;
let dotHasBeenUsed = 0;
let number1FirstUse = 0;
let number2FirstUse = 0;

function addToNumber(toAdd) {
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

function displayOnScreen(toDisplay) {
  screen.textContent = toDisplay;
}

function buttonACPressed() {}

buttonAC.addEventListener("click", buttonACPressed);

function buttonCPressed() {}

buttonC.addEventListener("click", buttonCPressed);

function buttonDividePressed() {}

buttonDivide.addEventListener("click", buttonDividePressed);

function button7Pressed() {}

button7.addEventListener("click", button7Pressed);

function button8Pressed() {}

button8.addEventListener("click", button8Pressed);

function button9Pressed() {}

button9.addEventListener("click", button9Pressed);

function buttonMultiplyPressed() {}

buttonMultiply.addEventListener("click", buttonMultiplyPressed);

function button4Pressed() {}

button4.addEventListener("click", button4Pressed);

function button5Pressed() {}

button5.addEventListener("click", button5Pressed);

function button6Pressed() {}

button6.addEventListener("click", button6Pressed);

function buttonSubtractPressed() {}

buttonSubtract.addEventListener("click", buttonSubtractPressed);

function button1Pressed() {}

button1.addEventListener("click", button1Pressed);

function button2Pressed() {}

button2.addEventListener("click", button2Pressed);

function button3Pressed() {}

button3.addEventListener("click", button3Pressed);

function buttonAdditionPressed() {}

buttonAddition.addEventListener("click", buttonAdditionPressed);

function button0Pressed() {}

button0.addEventListener("click", button0Pressed);

function buttonDotPressed() {}

buttonDot.addEventListener("click", buttonDotPressed);

function buttonEqualsPressed() {}

buttonEquals.addEventListener("click", buttonEqualsPressed);
