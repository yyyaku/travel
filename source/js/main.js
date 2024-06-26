import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {navButtonClick} from './modules/intro/nav';
import {initVideoPlayer} from './modules/intro/init-video-player';
import {initAudioPlayer} from './modules/intro/init-audio-player';
import {initSliderIntro} from './modules/sliders/init-slider-intro';
import {initSliderTours} from './modules/sliders/init-slider-tours';
import {initSliderInstructors} from './modules/sliders/init-slider-instructors';
import {initSliderReviews} from './modules/sliders/init-slider-reviews';
import './modules/sliders/init-slider-advantages';
import {initSliderGallery} from './modules/sliders/init-slider-gallery';
import {map} from './modules/map/map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    navButtonClick();
    initVideoPlayer();
    initAudioPlayer();
    initSliderIntro();
    initSliderTours();
    initSliderInstructors();
    initSliderReviews();
    initSliderGallery();
    map();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
