"use strict";

const form = document.querySelector(".form");

const againBtn = document.querySelector(".btn-again");
const rateNumbers = document.querySelectorAll(".btn-radio");
const currentRate = document.getElementById("rate-id");

const frontCard = document.querySelector(".front-card");
const backCard = document.querySelector(".back-card");

rateNumbers.forEach((button) => {
  button.addEventListener("click", function () {
    currentRate.textContent = button.textContent;
    rateNumbers.forEach((rate) => rate.classList.remove("active"));
    this.classList.add("active");
  });
});

const toggleButtons = function () {
  frontCard.classList.toggle("hidden");
  backCard.classList.toggle("hidden");
};

// click events - form button
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (currentRate.textContent !== "") {
    toggleButtons();
  }
});

// click events - rate again button
againBtn.addEventListener("click", toggleButtons);
againBtn.addEventListener("click", function () {
  const rate = currentRate.textContent;
  document.querySelector(`.btn--${rate}`).classList.remove("active");
  currentRate.textContent = "";
});
