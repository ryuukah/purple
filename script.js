const albumButton = document.getElementById("albumButton");
const audio = document.getElementById("audio");
const cd = document.getElementById("cd");


/* CLICK IMAGE */

albumButton.addEventListener("click", () => {

  if (audio.paused) {

    // Play audio
    audio.play()
      .then(() => {
        // Start CD spinning
        cd.classList.add("is-spinning");
      })
      .catch((error) => {
        console.error("Audio could not be played:", error);
      });

  } else {

    // Stop audio
    audio.pause();

    // Reset audio to beginning
    audio.currentTime = 0;

    // Stop CD spinning
    cd.classList.remove("is-spinning");

  }

});


/* STOP CD WHEN SONG ENDS */

audio.addEventListener("ended", () => {
  cd.classList.remove("is-spinning");
});
