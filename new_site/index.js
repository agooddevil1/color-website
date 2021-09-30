const menu = document.querySelector("#mobile-menu");
const menuLink = document.querySelector(".navbar-menu");
// function display
const mobleMenu = () => {
    menu.classList.toggle("is-active")
    menuLink.classList.toggle("active")
}
menu.addEventListener("click",mobleMenu);