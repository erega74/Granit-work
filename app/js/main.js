new WOW().init();


var burgerBtn = document.querySelector(".burger__btn");
var headerList = document.querySelector(".header-content__link-list");
var overlay = document.querySelector(".overlay");
burgerBtn.addEventListener("click",  function() {
    burgerBtn.classList.toggle("burger-cross__btn");
    headerList.classList.toggle("link-list--open");
    overlay.classList.toggle("overlay__active");
});