const albumButton = document.getElementById("albumButton");
const audio = document.getElementById("audio");
const cd = document.getElementById("cd");

albumButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play()
      .then(() => {
        cd.classList.add("is-spinning");
      })
      .catch((error) => {
        console.error("Audio could not be played:", error);
      });
  } else {
    audio.pause();
    audio.currentTime = 0;
    cd.classList.remove("is-spinning");
  }
});

audio.addEventListener("ended", () => {
  cd.classList.remove("is-spinning");
});
