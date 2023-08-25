const sliderGallery = document.querySelector('.gallery__swiper');
const buttonPrev = document.querySelector('.gallery__button--prev');
const buttonNext = document.querySelector('.gallery__button--next');

const initSliderGallery = () => {
  if (sliderGallery) {
    // eslint-disable-next-line
    new Swiper(sliderGallery, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      loop: true,

      breakpoints: {
        1200: {
          slidesPerView: 2.49,
          spaceBetween: 5,
        },

        768: {
          slidesPerView: 1.32,
          spaceBetween: 5,
        },

        320: {
          slidesPerView: 0.96,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderGallery};
