const sliderAdvantages = document.querySelector('.advantages__swiper');
const buttonPrev = document.querySelector('.advantages__button--prev');
const buttonNext = document.querySelector('.advantages__button--next');

const breakpoint = window.matchMedia('(min-width:1199px)');
// eslint-disable-next-line
let initSliderAdvantages = new Swiper(sliderAdvantages, {
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },

  loop: true,
  slidesPerView: 3.6,
  centeredSlides: true,
  spaceBetween: 30,
});

if (sliderAdvantages) {
  if (!breakpoint.matches) {
    initSliderAdvantages.destroy();
  }
}
if (sliderAdvantages) {
  breakpoint.addEventListener('change', (evt) => {
    if (evt.matches) {
      // eslint-disable-next-line
      initSliderAdvantages = new Swiper(sliderAdvantages, {
        navigation: {
          nextEl: buttonNext,
          prevEl: buttonPrev,
        },

        loop: true,
        slidesPerView: 3.6,
        centeredSlides: true,
        spaceBetween: 30,
      });
    } else {
      initSliderAdvantages.destroy();
    }
  });
}
