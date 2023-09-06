const introHeader = document.querySelector('.intro-header');
const introLogo = document.querySelector('.intro-header__logo');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const overlay = document.querySelector('.overlay');
const slide = document.querySelector('.intro-main');
const body = document.querySelector('body');
const siteLinkTours = document.querySelector('.site-list__link--tours');
const siteLinkEducation = document.querySelector('.site-list__link--education');
const siteLinkAbout = document.querySelector('.site-list__link--about');
const siteLinkReviews = document.querySelector('.site-list__link--reviews');
const siteLinkGallery = document.querySelector('.site-list__link--gallery');
const siteLinkContacts = document.querySelector('.site-list__link--contacts');

const navButtonClick = () => {
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--closed');
    navMain.classList.toggle('main-nav--opened');
    introHeader.classList.toggle('intro-header--opened');
    introLogo.classList.toggle('logo--dark');
    overlay.classList.toggle('overlay--opened');
    body.classList.toggle('menu--opened');
    slide.classList.toggle('intro-main--opened');
  });

  overlay.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--closed');
    navMain.classList.toggle('main-nav--opened');
    introHeader.classList.toggle('intro-header--opened');
    introLogo.classList.toggle('logo--dark');
    overlay.classList.toggle('overlay--opened');
    body.classList.toggle('menu--opened');
    slide.classList.toggle('intro-main--opened');
  });

  siteLinkTours.addEventListener('click', function () {
    closeMenu();
  });
  siteLinkEducation.addEventListener('click', function () {
    closeMenu();
  });
  siteLinkAbout.addEventListener('click', function () {
    closeMenu();
  });
  siteLinkReviews.addEventListener('click', function () {
    closeMenu();
  });
  siteLinkGallery.addEventListener('click', function () {
    closeMenu();
  });
  siteLinkContacts.addEventListener('click', function () {
    closeMenu();
  });
};

const closeMenu = () => {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  introHeader.classList.remove('intro-header--opened');
  introLogo.classList.remove('logo--dark');
  overlay.classList.remove('overlay--opened');
  body.classList.remove('menu--opened');
  slide.classList.remove('intro-main--opened');
};

export {navButtonClick};
