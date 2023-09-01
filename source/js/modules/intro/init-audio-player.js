const container = document.querySelector('.intro-audio__container');
const button = document.querySelector('.intro-audio__play');
const wrapper = document.querySelector('.intro-audio__wrapper');

const createAudio = () => {
  const audio = document.createElement('iframe');

  audio.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374');
  audio.setAttribute('frameborder', '0');
  audio.classList.add('description__audio-player');
  container.append(audio);
};

const initAudioPlayer = () => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    wrapper.style.display = 'none';
    createAudio();
  });
};

export {initAudioPlayer};
