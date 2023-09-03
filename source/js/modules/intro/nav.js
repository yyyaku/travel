const introHeader = document.querySelector('.intro-header');
const introLogo = document.querySelector('.intro-header__logo');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const navButtonClick = () => {
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--closed');
    navMain.classList.toggle('main-nav--opened');
    introHeader.classList.toggle('intro-header--opened');
    introLogo.classList.toggle('logo--dark');
  });
};

export {navButtonClick};
