let openDropdown = document.getElementById("menu_dropdown")

// Burger menu
function burger_click() {
    openDropdown.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.header__nav_dropdown-button')) {
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
    }
}

// Project Slider



let slides = document.getElementsByClassName("main__project_slider-element");