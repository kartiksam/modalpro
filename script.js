"use strict";
const modal = document.querySelector(".modal");
const showbtn = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".close-modal");
console.log(showbtn);

const open = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < showbtn.length; i++) {
  showbtn[i].addEventListener("click", open);
}
const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closebtn.addEventListener("click", close);
overlay.addEventListener("click", close);
// one key event reamians
