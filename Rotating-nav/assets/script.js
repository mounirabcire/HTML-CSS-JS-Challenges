const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const content = document.querySelector(".container__content");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");

openMenu.addEventListener("click", () => handleActiveClass(true));

closeMenu.addEventListener("click", () => handleActiveClass(false));

function handleActiveClass(isActive) {
    if (isActive) {
        menu.classList.add("active");
        nav.classList.add("active");
        content.classList.add("active");
    } else {
        menu.classList.remove("active");
        nav.classList.remove("active");
        content.classList.remove("active");
    }
}
