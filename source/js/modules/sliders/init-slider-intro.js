const sliderIntro = document.querySelector('.intro__swiper');
const intro = document.querySelector('.intro');
const introSlide = document.querySelector('.intro__item');

const initSliderIntro = () => {
  if (sliderIntro) {
    // eslint-disable-next-line
    const swiper = new Swiper(sliderIntro, {

      loop: true,

      slidesPerView: 1,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        768: {
          allowTouchMove: false,
        },

        320: {
          allowTouchMove: true,
        },
      },
    });

    swiper.on('slideChange', function () {

      if (introSlide.classList.contains('swiper-slide-active') && introSlide.classList.contains('intro__item--сaucasus')) {
        intro.classList.remove('intro--kamchatka');
        intro.classList.remove('intro--altai');
        intro.classList.add('intro--сaucasus');
      }

      if (introSlide.classList.contains('swiper-slide-active') && introSlide.classList.contains('intro__item--kamchatka')) {
        intro.classList.remove('intro--сaucasus');
        intro.classList.remove('intro--altai');
        intro.classList.add('intro--kamchatka');
      }

      if (introSlide.classList.contains('swiper-slide-active') && introSlide.classList.contains('intro__item--altai')) {
        intro.classList.remove('intro--сaucasus');
        intro.classList.remove('intro--kamchatka');
        intro.classList.add('intro--altai');
      }
    });
  }
};

export {initSliderIntro};
