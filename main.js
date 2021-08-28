"use strict";

const changeOverviewBackground = function () {
  let overviewItem = document.querySelectorAll(".overview");
  for (let item of overviewItem) {
    item.classList.toggle("active");
  }
};

const changeBioBackdround = function () {
  let bioItem = document.querySelectorAll(".bio");
  for (let item of bioItem) {
    item.classList.toggle("active");
  }
};

const changeAmountHeader = function () {
  let h_item = document.querySelectorAll(".amount h1");
  for (let item of h_item) {
    item.classList.toggle("active");
  }
};

const changeTextColor = function () {
  let text_item = document.querySelectorAll("p");
  for (let item of text_item) {
    item.classList.toggle("active");
  }
};

const changeH3Color = function () {
  let h3_item = document.querySelectorAll("h3");
  for (let item of h3_item) {
    item.classList.toggle("active");
  }
};

const changeH2Color = function () {
  let h2_item = document.querySelectorAll("h2");
  for (let item of h2_item) {
    item.classList.toggle("active");
  }
};

document.querySelector(".switch").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("active");
  document.querySelector(".switch").classList.toggle("active");
  document.querySelector(".switch_circle").classList.toggle("active");
  document.querySelector(".green").classList.toggle("active");
  document.querySelector(".dark").classList.toggle("active");
  changeOverviewBackground();
  changeBioBackdround();
  changeAmountHeader();
  changeTextColor();
  changeH3Color();
  changeH2Color();
});
