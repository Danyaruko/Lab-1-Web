
const OPEN_CLASSNAME = "active";

const navLinks = document.getElementById("nav-links");
const headerBurger = document.getElementById("header__burger");
const body = document.getElementById("body");

 function toggleMenu() {
    navLinks.classList.toggle(OPEN_CLASSNAME);
    headerBurger.classList.toggle(OPEN_CLASSNAME);
}

