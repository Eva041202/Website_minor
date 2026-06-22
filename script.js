var deButton = document.querySelector("header button");
var deNav = document.querySelector("nav");

deButton.onclick = toggleMenu;

function toggleMenu() {
    deNav.classList.toggle("open");
}

var terugButton = document.querySelector(".back-button");

if (terugButton) {
    terugButton.onclick = function () {
        history.back();
    };
}