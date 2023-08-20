const sliderIntro = document.querySelector('.intro__swiper');

const initSliderIntro = () => {
  if (sliderIntro) {
    // eslint-disable-next-line
    new Swiper(sliderIntro, {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
};

export {initSliderIntro};
