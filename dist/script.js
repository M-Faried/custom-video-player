const video = document.getElementById('video');
const progress = document.getElementById('progress');
const btnPlay = document.getElementById('play');
const btnStop = document.getElementById('stop');
const timestamp = document.getElementById('timestamp');

let counter = 0;

/////////////////////////////////////////////////// Event Handlers

video.addEventListener('click', toggleVideoPlay);
video.addEventListener('timeupdate', displayVideoProgress);

btnPlay.addEventListener('click', toggleVideoPlay);
btnStop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

/////////////////////////////////////////////////// Helper Functions

function toggleVideoPlay() {
  if (video.paused) {
    video.play();
    btnPlay.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    btnPlay.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
  btnPlay.innerHTML = '<i class="fas fa-play"></i>';
}

function displayVideoProgress() {
  //Updating the progress bar
  progress.value = (video.currentTime / video.duration) * 100;

  //Updating the time stamp.
  let minutes = Math.floor(video.currentTime / 60);
  let seconds = Math.floor(video.currentTime % 60);
  if (minutes < 10) minutes = String('0') + minutes;
  if (seconds < 10) seconds = String('0') + seconds;
  timestamp.innerHTML = `${minutes}:${seconds}`;

  //Updating the play button icon at the end of the video.
  if (+progress.value === 100) {
    btnPlay.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}
