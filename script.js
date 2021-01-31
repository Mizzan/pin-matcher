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
const generateRandomNumber = document.getElementById("generateRandomNumber");
function createRandomNumber() {
  const fourDigitRandomNumber = Math.floor(1000 + Math.random() * 9000);
  //   console.log(fourDigitRandomNumber);
  return fourDigitRandomNumber;
}

generateRandomNumber.addEventListener("click", function () {
  document.getElementById(
    "randomNumberInput"
  ).value = `${createRandomNumber()}`;
});
