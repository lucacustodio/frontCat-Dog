let menuToggle = document.querySelector(".button-menu");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", (e) => {
    menu.classList.toggle("activar");
});