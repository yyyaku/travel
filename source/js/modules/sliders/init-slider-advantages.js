const sliderAdvantages = document.querySelector('.advantages__swiper');
const buttonPrev = document.querySelector('.advantages__button--prev');
const buttonNext = document.querySelector('.advantages__button--next');

const initSliderAdvantages = () => {
  if (sliderAdvantages) {
    // eslint-disable-next-line
    new Swiper(sliderAdvantages, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      slidesPerView: 3,
      spaceBetween: 40,
    });
  }
};

// const destroySwiperAdvantages = () => {
//   if (window.innerWidth < 1200 && mySwiper) {
//     mySwiper.destroy();
//     document.querySelector('.advantages__swiper').style.display = 'block';
//   } else if (!mySwiper.init) {
//     initSliderAdvantages();
//   }
// };

export {initSliderAdvantages};
