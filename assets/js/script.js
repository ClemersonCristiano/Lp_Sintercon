
let botaoMenu = document.getElementById("botaoMenuMobile");
let menuMobile = document.getElementById("menuMobile");

botaoMenu.addEventListener("click", () => {

    if (menuMobile.style.display === "flex" && window.innerWidth < 668) {
        menuMobile.style.display = "none";

    } else {
        menuMobile.style.display = "flex";
    }
});
