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
let next_button = document.getElementsByClassName("main__project_slider-right")[0];
let prev_button = document.getElementsByClassName("main__project_slider-left")[0];
let slider = document.getElementsByClassName("main__project_slider")[0];

slider.style.left = 0 + "px";

let current_slider_element = 1

next_button.addEventListener("click", function(){
    if (prev_button.classList.contains("hide")) {
        prev_button.classList.remove("hide")
    }

    slider.style.left = -current_slider_element * (slider.offsetWidth/2) + "px";

    current_slider_element+= 1
    if (current_slider_element==3) {
        next_button.classList.add("hide");
    }

})

prev_button.addEventListener("click", function(){
    if (next_button.classList.contains("hide")) {
        next_button.classList.remove("hide")
    }

    current_slider_element -= 1
    slider.style.left = (-current_slider_element+1) * (slider.offsetWidth/2) + "px";
    
    if (current_slider_element==1) {
        prev_button.classList.add("hide");
    }
})

window.addEventListener('resize', function() {
    slider.style.left = (-current_slider_element+1) * (slider.offsetWidth/2) + "px"
})
