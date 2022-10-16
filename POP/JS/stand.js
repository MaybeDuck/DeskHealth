var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 15;



countdownNumberEl.textContent = countdown;

setInterval(function() {
  countdown = --countdown;

  countdownNumberEl.textContent = countdown;
}, 60000);

