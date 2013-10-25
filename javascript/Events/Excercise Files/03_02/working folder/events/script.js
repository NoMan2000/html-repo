var jukebox = document.querySelector('ul.player');
jukebox.addEventListener('click', function(e) {
  var songName = e.target.getAttribute('data-src');
  var audioPlayer = document.querySelector('#player');

  if (audioPlayer) {

    if (songName===audioPlayer.getAttribute('src')) {
      if (audioPlayer.paused) {
        audioPlayer.play();
        e.target.id = 'playing';
      } else {
        audioPlayer.pause();
        e.target.id = 'paused';
      }
    } else {
      audioPlayer.src = songName;
      audioPlayer.play();
      if (document.querySelector('#playing')) {
        document.querySelector('#playing').removeAttribute('id');
      } else {
        document.querySelector('#paused').removeAttribute('id');
      }
        e.target.id = 'playing';
    }



  } else {
      //Re-initialize audioplayer because it won't exist in the DOM.
    audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player';
    e.target.id = 'playing';
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();


    audioPlayer.addEventListener('ended', function() {
      audioPlayer.parentNode.removeChild(audioPlayer);
      e.target.removeAttribute('id');
    }, false);
  }

}, false);