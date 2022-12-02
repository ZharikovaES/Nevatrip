const BREAKPOINT3 = 767;

function ready() {

    // выпадающее меню (desktop), бургер-меню (mobile)
    dropDownMenu();
}

function load() {

    document.body.classList.remove("preload");
}

window.addEventListener("load", load);

document.addEventListener("DOMContentLoaded", ready);
