var music = document.querySelector('.v-media');

document.querySelector('.v-play').addEventListener('click', fplay)
document.querySelector('.v-pause').addEventListener('click', fmuted)
document.querySelector('.v-volume').addEventListener('mousemove', fvol)

// play music
function fplay() {
    music.play();
}

// mute music
function fmuted() {
    music.pause();
}

// volume music
  function fvol() {
    music.volume = document.querySelector('.v-volume').value / 100;
}