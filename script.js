"use strick";
//IMPROT
import { componentOne } from "./componentOne.js";
import { componentTwo } from "./componenttwo.js";

//SELECTOR
const body = document.querySelector("body");

//FUNCTIONS
//
function creatErorUI(lableEror, formInput) {
  lableEror.textContent = "NOT EMAIL";
  lableEror.style.color = "#fc2d2d";
  formInput.style.backgroundColor = "#fc2d2d";
}
//
function currentEmail(email) {
  const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
  return emailRegex.test(email);
}
//
let states = "mainPage";
let email = "";
//
function creatView() {
  if (states === "mainPage") {
    body.innerHTML = "";
    body.insertAdjacentHTML("afterbegin", componentOne());
    const form = document.querySelector("form");
    const formInput = document.querySelector("input");
    const error = document.querySelector(".error-message");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!currentEmail(formInput.value)) {
        creatErorUI(error, formInput);
        return;
      }
      states = "ConfirmationPage";
      email = formInput.value;
      creatView();
    });
  }

  if (states === "ConfirmationPage") {
    body.innerHTML = "";
    body.insertAdjacentHTML("afterbegin", componentTwo());
    const showEmail = document.querySelector(".spanTwo");
    showEmail.innerText = email;
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      body.innerHTML = "";
      body.insertAdjacentHTML("afterbegin", componentOne());
      states = "mainPage";
      //   creatView();
    });
  }
}
creatView();

//26 be bad
