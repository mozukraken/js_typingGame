(function() {
  'use strict';

  var words = [
    'apple',
    'imagine',
    'supply',
    'fun',
    'sad',
    'happy',
    'danger'
  ];
  var currentWord = 'apple';
  var currentLocation = 0;
  var score = 0;
  var miss = 0;
  var target = document.getElementById('target');
  var scoreLabel = document.getElementById('score');
  var missLabel = document.getElementById('miss');

  target.innerHTML = currentWord;
  scoreLabel.innerHTML = score;
  missLabel.innerHTML = miss;

  function setTarget() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    target.innerHTML = currentWord;
    currentLocation = 0;
  }

  window.addEventListener('keyup', function(e) {
    if (String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()) {
      currentLocation++;
      var placeholder = '';
      for (var i = 0; i < currentLocation; i++) {
        placeholder += '_';
      }
      target.innerHTML = placeholder + currentWord.substring(currentLocation);
      score++;
      scoreLabel.innerHTML = score;
      if (currentLocation === currentWord.length) {
        setTarget();
      }
    } else {
      miss++;
      missLabel.innerHTML = miss;
    }
  });
})();
