const introHeader = document.querySelector('.intro-header');
const introLogo = document.querySelector('.intro-header__logo');
const introLogoBlack = document.querySelector('.intro-header__logo-black');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const navButtonClick = () => {
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      introHeader.classList.add('intro-header--opened');
      introLogo.classList.add('visually-hidden');
      introLogoBlack.classList.remove('visually-hidden');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      introHeader.classList.remove('intro-header--opened');
      introLogoBlack.classList.add('visually-hidden');
      introLogo.classList.remove('visually-hidden');
    }
  });
};

export {navButtonClick};
