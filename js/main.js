(function() {
  'use strict';

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

  window.addEventListener('keyup', function(e) {
    if (String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()) {
      // console.log('score!');
    } else {
      // console.log('miss');
    }
  });
})();
