const container = document.querySelector('.intro-audio');
const button = document.querySelector('.intro-audio__toggle');

const createAudio = () => {
  const audio = document.createElement('iframe');

  audio.setAttribute('src', 'https://music.yandex.ru/album/25474374?dir=desc&activeTab=track-list');
  audio.setAttribute('title', 'Yandexmusic audio player');
  audio.setAttribute('frameborder', '0');
  audio.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  audio.setAttribute('allowfullscreen', '');
  container.append(audio);
};

const initAudioPlayer = () => {
  if (container && button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      createAudio();
    });
  }
};

export {initAudioPlayer};
