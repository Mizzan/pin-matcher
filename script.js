// method 1
// function randomPin() {
//   return Math.round((Math.random() * 10000).toFixed(4));
// }
// var getLength = (Math.log(randomPin()) * Math.LOG10E + 1) | 0;
// let fourDigitNumber;

// getLength === 4 ? (fourDigitNumber = randomPin()) : randomPin();

// console.log(getLength)

// Method 2

// creating 4 digit random number
// const generateRandomNumber = document.getElementById("generateRandomNumber");
// function createRandomNumber() {
//   const fourDigitRandomNumber = Math.floor(1000 + Math.random() * 9000);
//   //   console.log(fourDigitRandomNumber);
//   return fourDigitRandomNumber;
// }

// generateRandomNumber.addEventListener("click", function () {
//   document.getElementById(
//     "randomNumberInput"
//   ).value = `${createRandomNumber()}`;
// });

// // making number input interaction
// const numberButton = document.querySelectorAll(".button");
// numberButton.forEach(function (numberButton) {
//   numberButton.addEventListener("click", function (event) {
//     const btn = event.target;
//     const btnNumber = parseInt(btn.innerText);
//   });
// });

// another method
function getPinNumber() {
  const randomNumber = Math.random() * 10000;
  const pin = (randomNumber + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    // console.log("shorter pin", pin);
    return getPinNumber();
  }
}

// display generated pin
const pinInput = document.getElementById("randomNumberInput");
const typedInput = document.getElementById("numberInput");

function generatePin() {
  pinInput.value = getPinNumber();
}

// handles calculator button event
const buttonContainer = document.getElementById("digits-container");
buttonContainer.addEventListener("click", function (event) {
  const digit = event.target.innerText;
  if (isNaN(digit)) {
    // handle backspace
    // handle clear
    if (digit === "C") {
      typedInput.value = "";
    }
  } else {
    typedInput.value = typedInput.value + digit;
  }
  // console.log(digit);
});

// verify pin
function matchPin(params) {
  const pinValue = pinInput.value;
  const typedValue = typedInput.value;
  if (pinValue === typedValue) {
    alertStatus("block", "none");
  } else {
    alertStatus("none", "block");
  }
}

function alertStatus(correctStatus, incorrectStatus) {
  const correct = document.getElementById("correct-pin");
  correct.style.display = correctStatus;
  const incorrect = document.getElementById("incorrect-pin");
  incorrect.style.display = incorrectStatus;
}
