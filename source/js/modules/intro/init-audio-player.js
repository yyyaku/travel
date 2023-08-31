const container = document.querySelector('.intro-audio__container');
const button = document.querySelector('.intro-audio__play');
const wrapper = document.querySelector('.intro-audio__wrapper');

const createAudio = () => {
  const audio = document.createElement('iframe');

  audio.setAttribute('src', 'https://music.yandex.ru/album/25474374/track/112912322?activeTab=track-list');
  audio.setAttribute('title', 'YouTube video player');
  audio.setAttribute('frameborder', '0');
  audio.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  audio.setAttribute('allowfullscreen', '');
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
