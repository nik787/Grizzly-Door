var headerNav = document.querySelector('.header__nav');
var headeerNavBurger = headerNav.querySelector('.nav__burger');
var headerNavList = headerNav.querySelector('.nav__list');
var leftClick = function (evt) {
  console.log(evt);

  // if(evt.key === 0) {
  //   openNavList();
  // }
};
var openNavList = function () {
  headerNavList.classList.toggle('nav__list--active');
}

headeerNavBurger.addEventListener('click', function (evt) {
  console.log(evt.key);

  if (evt.key === 0) {
    headerNavList.classList.toggle('nav__list--active');
  }
});

