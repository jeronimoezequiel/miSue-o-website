// Copy menu for mobile
function copyMenu() {
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// Show mobile menu
const menuButton = document.querySelector('.trigger'); // Corregido
const closeButton = document.querySelector('.t-close');
const addClass = document.querySelector('.site');

if (menuButton) { // Verificar si existe
    menuButton.addEventListener('click', function() {
        addClass.classList.toggle('showmenu'); // Corregido
    });
}

if (closeButton) { // Verificar si existe
    closeButton.addEventListener('click', function() {
        addClass.classList.remove('showmenu'); // Corregido
    });
}

// Show submenu in mobile
const submenus = document.querySelectorAll('.has-child .icon-small'); // Corregido

submenus.forEach((menu) => {
    menu.addEventListener('click', toggle);
});

function toggle(e) {
    e.preventDefault();
    submenus.forEach((item) => {
        if (item !== this) {
            item.closest('.has-child').classList.remove('expand'); // Corregido
        }
    });

    // Verificar y alternar la clase expand
    const parent = this.closest('.has-child');
    if (parent) {
        parent.classList.toggle('expand'); 
    };
};

//Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//Mostrar buscador
const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
});
tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch')
})

