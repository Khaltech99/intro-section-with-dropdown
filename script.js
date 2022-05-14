"use strict";

const menu = document.querySelector(".nav__image");
const side = document.querySelector(".side");
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const cancel = document.querySelector(".side__cancel");
const mad = document.querySelector(".mad");

menu.addEventListener("click", function() {
    menu.style.visibility = "hidden";
    side.style.display = "flex";
    side.style.left = "10px";
    hero.style.margin = "0";
    side.style.margin = "0";
});
cancel.addEventListener("click", function() {
    side.style.display = "none";
    menu.style.visibility = "";
});