// Mobile hamburger menu DOM queries
var hamburgerButton = document.getElementById('hamburgerIcon');
var mobileNavContent = document.getElementById('mobileMenu');
var dropshadow = document.getElementById('dropshadow');
// Dropdown menu DOM queries
var dropdownButton = document.getElementById('dropdownButton');
var dropdownContent = document.getElementById('dropdownMenu');
// Sticky nav bar variables
var navbar = document.getElementById('navbar');
var freeQuoteCta = document.getElementById('freequote');
var pageBuffer = document.getElementById('pageBuffer');
var sticky = navbar.offsetHeight;
// Document title DOM queries
var docTitle = 'CMOS – Commercial Cleaning Company';
var titleMessage = 'Hey, come back!';

// Function controlling sticky nav ability
function stickyNav() {
    var navHeight = navbar.scrollHeight;
    if(freeQuoteCta){
        var ctaHeight = freeQuoteCta.scrollHeight;
    }
    if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky-header');
    mobileNavContent.style.position = 'fixed';
    mobileNavContent.style.top = navHeight + 'px';
    if(freeQuoteCta){
        freeQuoteCta.classList.add('sticky-mobile-cta');
        freeQuoteCta.style.top = navHeight + 'px';
        pageBuffer.style.marginTop = navHeight + ctaHeight +'px';
    } else{
        pageBuffer.style.marginTop = navHeight + 'px';
    }
  } else {
    navbar.classList.remove('sticky-header');
    pageBuffer.style.marginTop = 0;
    if(freeQuoteCta){
        freeQuoteCta.classList.remove('sticky-mobile-cta');
    }
  }
}
window.onscroll = function() {stickyNav()};

// Function controlling hamburger menu (on mobile/tablet only)
function toggleMenu(){
    if(mobileNavContent.style.maxHeight){
        mobileNavContent.style.maxHeight = null;
        dropshadow.style.opacity = '0';
        dropshadow.style.pointerEvents = 'none';
    } else{
        mobileNavContent.style.maxHeight = mobileNavContent.scrollHeight + 'px';
        dropshadow.style.opacity = '0.4';
        dropshadow.style.pointerEvents = 'auto';
    }
}

hamburgerButton.addEventListener('click', toggleMenu, false);

dropshadow.addEventListener('click', toggleMenu, false);

// Function controlling drop-down services menu (desktop only)
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


// Function controlling document title change

window.onblur = function() { 
    document.title = titleMessage; 
}

window.onfocus = function() {
    document.title = docTitle; 
}


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





