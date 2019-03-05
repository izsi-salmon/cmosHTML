var hamburgerButton = document.getElementById('hamburgerIcon');
var navContent = document.getElementById('mobileMenu');
var dropshadow = document.getElementById('dropshadow');

function toggleMenu(){
    if(navContent.style.maxHeight){
        navContent.style.maxHeight = null;
        dropshadow.style.opacity = '0';
    } else{
        navContent.style.maxHeight = navContent.scrollHeight + 'px';
        dropshadow.style.opacity = '0.5';
    }
}

hamburgerButton.addEventListener('click', toggleMenu, false);

dropshadow.addEventListener('click', function(){
    navContent.style.maxHeight = null;
    dropshadow.style.opacity = '0';
}, false);