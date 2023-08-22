const intro = document.querySelector('.intro');
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
      intro.classList.remove('intro');
      intro.classList.add('intro--opened');
      introLogo.classList.add('visually-hidden');
      introLogoBlack.classList.remove('visually-hidden');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      intro.classList.remove('intro--opened');
      intro.classList.add('intro');
      introLogoBlack.classList.add('visually-hidden');
      introLogo.classList.remove('visually-hidden');
    }
  });
};

export {navButtonClick};
