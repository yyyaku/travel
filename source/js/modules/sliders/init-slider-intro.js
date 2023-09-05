import {deleteVideoPlayer} from '../intro/init-video-player';
import {deleteAudioPlayer} from '../intro/init-audio-player';

const sliderIntro = document.querySelector('.intro__swiper');
const intro = document.querySelector('.intro');

const initSliderIntro = () => {
  if (sliderIntro) {
    // eslint-disable-next-line
    const swiper = new Swiper(sliderIntro, {

      loop: true,

      slidesPerView: 1,
      spaceBetween: 40,
      fadeSpeed: 300,

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

      const activeSlide = document.querySelector('.swiper-slide-active');
      deleteVideoPlayer();
      deleteAudioPlayer();

      if (activeSlide.classList.contains('intro__item--kamchatka')) {
        intro.classList.add('intro--altai');
        intro.classList.remove('intro--caucasus');
        intro.classList.remove('intro--kamchatka');
      }

      if (activeSlide.classList.contains('intro__item--altai')) {
        intro.classList.add('intro--caucasus');
        intro.classList.remove('intro--altai');
        intro.classList.remove('intro--kamchatka');
      }

      if (activeSlide.classList.contains('intro__item--caucasus')) {
        intro.classList.add('intro--kamchatka');
        intro.classList.remove('intro--caucasus');
        intro.classList.remove('intro--altai');
      }
    });
  }
};

export {initSliderIntro};
