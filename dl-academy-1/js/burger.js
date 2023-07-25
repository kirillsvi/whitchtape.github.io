const burger = document.querySelector('.header__burger-menu');
const burgerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
})



