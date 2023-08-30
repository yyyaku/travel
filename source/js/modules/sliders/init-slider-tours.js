const sliderTours = document.querySelector('.tours__swiper');
const buttonPrev = document.querySelector('.tours__button--prev');
const buttonNext = document.querySelector('.tours__button--next');

const initSliderTours = () => {
  if (sliderTours) {
    // eslint-disable-next-line
    new Swiper(sliderTours, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: false,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 18,
          allowTouchMove: false,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          allowTouchMove: true,
        },
      },
    });
  }
};

export {initSliderTours};
