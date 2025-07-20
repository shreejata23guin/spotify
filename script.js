console.log("🎵 Spotify Clone JS Loaded");

// Get references to DOM elements
const audio = document.getElementById("audioPlayer");
const masterPlay = document.getElementById("masterPlay");
const progressBar = document.getElementById("myProgressBar");

// Play / Pause functionality
masterPlay.addEventListener("click", () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audio.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

// Update progress bar as song plays
audio.addEventListener("timeupdate", () => {
  if (!isNaN(audio.duration)) {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
  }
});

// Seek when progress bar is moved
progressBar.addEventListener("input", () => {
  if (!isNaN(audio.duration)) {
    const seekTime = (progressBar.value * audio.duration) / 100;
    audio.currentTime = seekTime;
  }
});
