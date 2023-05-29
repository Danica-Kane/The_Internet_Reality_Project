/* NAV BAR HAMBURGER */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

  var acsessibility = document.getElementById("acsessibility-btn");

  acsessibility.onclick = function() {
  acsessibility.style.background = "#00BF63";  
}

const dyslexia = document.querySelector(".dyslexia-btn");

dyslexia.addEventListener("click", () => {
  document.body.classList.toggle('dyslexia');
  })

  dyslexia.addEventListener("click", () => {
    var element = document.getElementById("home-text-one");
    element.classList.toggle("colum-home-1-text-font");
    })

  const fontSize = document.querySelector(".font-size-btn");

fontSize.addEventListener("click", () => {
  document.body.classList.toggle('font-size');
  })


/* --- PARRALAX SCROLL --- */

var image = document.getElementsByClassName('hero-banner');
new simpleParallax(image);