window.addEventListener('DOMContentLoaded', function () {
  var speedInput = document.getElementById('speed');
  var textEl = document.getElementById('text');
  var fullText = "We love Programming!";
  var typingTimer = null;

  function startTyping() {
    if (typingTimer) clearTimeout(typingTimer);
    textEl.textContent = '';

    var speedVal = parseInt(speedInput.value);
    if (isNaN(speedVal) || speedVal < 1) speedVal = 1;
    if (speedVal > 10) speedVal = 10;

    var delay = 500 / speedVal;
    var index = 0;

    function typeNext() {
      if (index < fullText.length) {
        textEl.textContent += fullText[index];
        index++;
        typingTimer = setTimeout(typeNext, delay);
      }
    }

    typeNext();
  }

  speedInput.addEventListener('change', startTyping);
  startTyping();
});