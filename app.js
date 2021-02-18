AOS.init();
//test
const test = document.querySelector(".icon-one");
//burger menu

const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar__list");
const links = document.querySelectorAll(".navbar__item");

burger.addEventListener("click", function () {
  nav.classList.toggle("active");
  //burger anim

  //animating links
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinks .7s ease forwards ${index / 7 + 0.3}s `;
    }
  });
  test.classList.toggle("active-one");
});
