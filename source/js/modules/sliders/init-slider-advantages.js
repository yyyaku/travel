const sliderAdvantages = document.querySelector('.advantages__swiper');
const sliderAdvantagesList = document.querySelector('.advantages__list');
const sliderAdvantagesCard = document.querySelector('.advantages-card');
const buttonPrev = document.querySelector('.advantages__button--prev');
const buttonNext = document.querySelector('.advantages__button--next');

const initSliderAdvantages = () => {
  if (window.innerWidth > 1200) {
    if (sliderAdvantages) {
      // eslint-disable-next-line
      new Swiper(sliderAdvantages, {

        navigation: {
          nextEl: buttonNext,
          prevEl: buttonPrev,
        },

        loop: true,
        slidesPerView: 3.6,
        centeredSlides: true,
        spaceBetween: 30,
      });
    }
  } else {
    sliderAdvantages.classList.remove('swiper');
    sliderAdvantagesList.classList.remove('swiper-wrapper');
    sliderAdvantagesCard.classList.remove('swiper-slide');
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
