"use strict";
import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayMessagePlus = function (message) {
  document.querySelector(".message_plus").textContent = message;
};
const displayMessageMulti = function (message) {
  document.querySelector(".message_multi").textContent = message;
};
const firstRandomNumber = function (num) {
  let number = 1;

  //   while (number < 5 || number === num) {
  while (number < 5 || number == num) {
    number = Math.trunc(Math.random() * 12) + 1;
  }

  console.log("First Number: ", number);

  return number;
};
const secondRandomNumber = function (firstNumber) {
  let number = 0;

  while (true) {
    number = Math.trunc(Math.random() * 5) + 1;
    if (number > 1 && number < firstNumber) {
      console.log("Second Number: ", number);
      return number;
    }
  }
};
// ///////////////////////////////////////////////////////////////
// Start here

let firstNumber = firstRandomNumber(5);
let secondNumber = secondRandomNumber(firstNumber);
let firstNumberMulti = (firstNumber % 5) + 2;
let secondNumberMulti = (secondNumber % 3) + 2;

document.querySelector(".firstNumber").textContent = firstNumber;
document.querySelector(".secondNumber").textContent = secondNumber;
document.querySelector(".firstNumberPlus").textContent = firstNumber;
document.querySelector(".secondNumberPlus").textContent = secondNumber;
document.querySelector(".firstNumberMulti").textContent = firstNumberMulti;
// document.querySelector(".secondNumberMulti").textContent = secondNumberMulti;
document.querySelector(".secondNumberMulti").textContent = 2;

// anonymous function
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);
  let total = firstNumber - secondNumber;
  // When there is no input
  if (!guess) {
    displayMessage("🧨 No number!");

    // When player wins
  } else if (guess === total) {
    startConfetti();
    setTimeout(stopConfetti(), 4000);

    displayMessage(" " + total + "   🎉Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guess !== total) {
    displayMessage(guess > total ? "🧧 Too high!" : "🧧 Too low!");
  } else {
    displayMessage("🧨 You lost the game!");
  }
});
document.querySelector(".check_plus").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess_plus").value);

  console.log(guess, typeof guess);
  let total = firstNumber + secondNumber;
  // When there is no input
  if (!guess) {
    displayMessagePlus("🧨 No number!");
    // When player wins
  } else if (guess === total) {
    startConfetti();
    setTimeout(stopConfetti(), 4000);
    displayMessagePlus(" " + total + "   🎉Correct Number!");
    document.querySelector("body").style.backgroundColor = "#507880";
  } else if (guess !== total) {
    displayMessagePlus(guess > total ? "🧧 Too high!" : "🧧 Too low!");
  } else {
    displayMessagePlus("🧨 You lost the game!");
  }
});

document.querySelector(".check_multi").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess_multi").value);

  console.log(guess, typeof guess);
  let total = firstNumberMulti * secondNumberMulti;
  // When there is no input
  if (!guess) {
    displayMessageMulti("🧨 No number!");
    // When player wins
  } else if (guess === total) {
    startConfetti();
    setTimeout(stopConfetti(), 4000);
    displayMessageMulti(" " + total + "   🎉Correct Number!");
    document.querySelector("body").style.backgroundColor = "#404880";
  } else if (guess !== total) {
    displayMessageMulti(guess > total ? "🧧 Too high!" : "🧧 Too low!");
  } else {
    displayMessageMulti("🧨 You lost the game!");
  }
});

// again
document.querySelector(".reset").addEventListener("click", function () {
  firstNumber = firstRandomNumber(5);
  secondNumber = secondRandomNumber(firstNumber);
  firstNumberMulti = (firstNumber % 5) + 2;
  //   secondNumberMulti = (secondNumber % 2) + 2;
  secondNumberMulti = 2;

  document.querySelector(".firstNumber").textContent = firstNumber;
  document.querySelector(".secondNumber").textContent = secondNumber;
  document.querySelector(".firstNumberPlus").textContent = firstNumber;
  document.querySelector(".secondNumberPlus").textContent = secondNumber;
  document.querySelector(".firstNumberMulti").textContent = firstNumberMulti;
  document.querySelector(".secondNumberMulti").textContent = secondNumberMulti;
  displayMessage("Start guessing...");
  displayMessagePlus("Start guessing...");
  displayMessageMulti("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess_plus").value = "";
  document.querySelector(".guess_multi").value = "";
});
