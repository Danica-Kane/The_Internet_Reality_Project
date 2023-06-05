/* NAV BAR HAMBURGER */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/* ACSESSIBILITY */

var acsessibility = document.getElementById("acsessibility-btn");

acsessibility.onclick = function () {
  acsessibility.style.background = "#00BF63";
};

const dyslexia = document.querySelector(".dyslexia-btn");

dyslexia.addEventListener("click", () => {
  document.body.classList.toggle("dyslexia");
});

/* remove classes */

dyslexia.addEventListener("click", () => {
  var element = document.getElementById("home-text-one");
  element.classList.toggle("colum-home-1-text-font");
});

dyslexia.addEventListener("click", () => {
  var element = document.getElementById("home-text-two");
  element.classList.toggle("colum-home-2-text-font");
});

dyslexia.addEventListener("click", () => {
  var element = document.getElementById("h1");
  element.classList.toggle("home-header-one-font");
});

dyslexia.addEventListener("click", () => {
  var element = document.getElementById("h1-2");
  element.classList.toggle("home-header-two-font");
});

/* --- */

dyslexia.addEventListener("click", () => {
  var element = document.getElementById("contact-text-one");
  element.classList.toggle("colum-contact-1-text-font");
});

dyslexia.addEventListener("click", () => {
  var element = document.getElementById("contact-text-two");
  element.classList.toggle("colum-contact-2-text-font");
});

dyslexia.addEventListener("click", () => {
  var element = document.getElementById("h1-3");
  element.classList.toggle("contact-header-one-font");
});

/*--*/

dyslexia.addEventListener("click", () => {
  var element = document.getElementById("education-container");
  element.classList.toggle("education-container");
});

/*--*/
const fontSize = document.querySelector(".font-size-btn");

fontSize.addEventListener("click", () => {
  document.body.classList.toggle("font-size");
});

/* --- PARRALAX SCROLL --- */

var image = document.getElementsByClassName("hero-banner");
new simpleParallax(image);
