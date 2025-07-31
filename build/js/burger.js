const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__burger-menu');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})