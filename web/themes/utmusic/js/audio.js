Drupal.behaviors.listingEventsCarousel = {
  attach(context) {

    const playAudioButton = document.querySelector('[data-file-component="play"]');

    playAudioButton.addEventListener("click", playSound);

    function playSound() {
      const audioPlayer = document.querySelector('[data-file-component="audio"] audio');

      playAudioButton.setAttribute('data-file-component', 'stop');

      audioPlayer.play();
    }
  },
};
