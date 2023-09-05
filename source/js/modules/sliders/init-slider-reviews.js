const sliderReviews = document.querySelector('.reviews__swiper');
const buttonPrev = document.querySelector('.reviews__button--prev');
const buttonNext = document.querySelector('.reviews__button--next');

const initSliderReviews = () => {
  if (sliderReviews) {
    // eslint-disable-next-line
    new Swiper(sliderReviews, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      allowTouchMove: false,

      breakpoints: {
        1200: {
          slidesPerView: 1.645,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 1.278,
          spaceBetween: 30,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          allowTouchMove: true,
          autoHeight: true,
        },
      },
    });
  }
};

export {initSliderReviews};
