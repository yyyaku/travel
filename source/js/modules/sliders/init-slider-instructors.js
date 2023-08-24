const sliderInstructors = document.querySelector('.instructors__swiper');
const buttonPrev = document.querySelector('.instructors__button--prev');
const buttonNext = document.querySelector('.instructors__button--next');

const initSliderInstructors = () => {
  if (sliderInstructors) {
    // eslint-disable-next-line
    new Swiper(sliderInstructors, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      loop: true,

      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 3,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderInstructors};