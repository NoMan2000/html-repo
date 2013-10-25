var jukebox = document.querySelector('ul.player');
jukebox.addEventListener('click', function(e) {
  var songName = e.target.getAttribute('data-src');
  var songPlaying = document.querySelector('#player');

  if (songPlaying) {

    if (songPlaying.paused) {
      songPlaying.play();
      e.target.id = 'playing';
    } else {
      songPlaying.pause();
      e.target.id = 'paused';
    }


  } else {
    var audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player';
    e.target.id = 'playing';
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();


    audioPlayer.addEventListener('ended', function() {
      audioPlayer.parentNode.removeChild(audioPlayer);
      e.target.id='';
    }, false);
  }

}, false);