function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('showButton').addEventListener('click', function() {
  document.getElementById('text-tentang').style.display = 'block';
});