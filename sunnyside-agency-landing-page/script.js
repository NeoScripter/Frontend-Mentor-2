function setFillColor(element, color) {
    element.style.fill = color;
  }
  
  document.querySelectorAll('.black').forEach(element => {
    element.addEventListener('mouseover', () => setFillColor(element, 'white'));
    element.addEventListener('mouseout', () => setFillColor(element, 'black'));
    element.addEventListener('focus', () => setFillColor(element, 'white'));
    element.addEventListener('blur', () => setFillColor(element, 'black'));
  });