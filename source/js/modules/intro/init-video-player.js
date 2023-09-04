const container = document.querySelector('.intro-video__wrapper');
const cover = document.querySelector('.intro-video__wrapper').querySelector('img');
const button = document.querySelector('.intro-video__wrapper').querySelector('button');

const video = document.createElement('iframe');

const createVideo = () => {

  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  video.setAttribute('title', 'YouTube video player');
  video.setAttribute('frameborder', '0');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  video.setAttribute('allowfullscreen', '');
  video.classList.add('description__video-player');
  container.append(video);
};

const deleteVideo = () => {
  video.remove();
};

const initVideoPlayer = () => {
  if (container && cover && button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      cover.style.display = 'none';
      button.style.display = 'none';
      createVideo();
    });
  }
};

const deleteVideoPlayer = () => {
  deleteVideo();
  cover.style.display = 'block';
  button.style.display = 'block';
  container.append(cover);
  container.append(button);
};

export {initVideoPlayer, deleteVideoPlayer};
