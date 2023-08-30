const introHeader = document.querySelector('.intro-header');
const introLogo = document.querySelector('.intro-header__logo');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const navButtonClick = () => {
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      introHeader.classList.add('intro-header--opened');
      introLogo.classList.add('logo--dark');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      introHeader.classList.remove('intro-header--opened');
      introLogo.classList.remove('logo--dark');
    }
  });
};

export {navButtonClick};
