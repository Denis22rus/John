import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.header__nav');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}