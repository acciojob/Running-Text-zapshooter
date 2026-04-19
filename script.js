//your JS code here. If required.
var typingTimer = null;

function startTyping() {
  if (typingTimer) clearTimeout(typingTimer);

  var speedInput = document.getElementById('speed');
  var textEl = document.getElementById('text');

  var speedVal = parseInt(speedInput.value);
  if (isNaN(speedVal) || speedVal < 1) speedVal = 1;
  if (speedVal > 10) speedVal = 10;

  var delay = 500 / speedVal;
  var fullText = "We love Programming!";

  textEl.innerHTML = '';

  for (var i = 0; i < fullText.length; i++) {
    var span = document.createElement('span');
    span.className = 'char';
    span.textContent = fullText[i] === ' ' ? '\u00A0' : fullText[i];
    textEl.appendChild(span);
  }

  var spans = textEl.querySelectorAll('.char');
  var index = 0;

  function typeNext() {
    if (index < spans.length) {
      spans[index].classList.add('visible');
      index++;
      typingTimer = setTimeout(typeNext, delay);
    }
  }

  typeNext();
}