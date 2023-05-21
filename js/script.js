"use strict";

const openButton =  document.querySelector('.open-button');
const closeButton =  document.querySelector('.close');
const modalProject =  document.querySelector('.hidden');

openButton.addEventListener('click', () => {
  modalProject.classList.remove("hidden");
  modalProject.classList.add("open");
  console.log(modalProject)
});

closeButton.addEventListener('click',() => {
  modalProject.classList.remove("open");
  modalProject.classList.add("hidden");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalProject .classList.remove("open");
    modalProject .classList.add("hidden");
  }
});