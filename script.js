// Mobile hamburger menu DOM queries
var hamburgerButton = document.getElementById('hamburgerIcon');
var navContent = document.getElementById('mobileMenu');
var dropshadow = document.getElementById('dropshadow');
// Dropdown menu DOM queries
var dropdownButton = document.getElementById('dropdownButton');
var dropdownArrow = document.getElementById('dropdownArrow');
var dropdownContent = document.getElementById('dropdownMenu');

function toggleMenu(){
    if(navContent.style.maxHeight){
        navContent.style.maxHeight = null;
        dropshadow.style.opacity = '0';
        dropshadow.style.pointerEvents = 'none';
    } else{
        navContent.style.maxHeight = navContent.scrollHeight + 'px';
        dropshadow.style.opacity = '0.4';
        dropshadow.style.pointerEvents = 'auto';
    }
}

hamburgerButton.addEventListener('click', toggleMenu, false);

dropshadow.addEventListener('click', toggleMenu, false);

function toggleDropdown(){
    if(dropdownContent.style.maxHeight){
        dropdownContent.style.maxHeight = null;
    } else{
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
    }
}

dropdownButton.addEventListener("click", function(event){
  event.preventDefault()
});

dropdownButton.addEventListener('click', toggleDropdown, false);

dropdownArrow.addEventListener('click', toggleDropdown, false);

// SWIPER (Home page slideshow banner)

var swiper = new Swiper('.swiper1', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});





