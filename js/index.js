const popupWrap = document.querySelector('.popup');
const popupBtn = document.querySelector('.btn-open-js')
const popupClose = document.querySelector('.popup__close')


popupBtn.addEventListener('click', function () {
    popupWrap.classList.add('open');
})

popupClose.addEventListener('click', function () {
    popupWrap.classList.remove('open');
})

window.addEventListener('keydown', function(event) {
    if(event.code === "Escape" && popupWrap.classList.contains('open')) {
        popupWrap.classList.remove('open');
    }
})