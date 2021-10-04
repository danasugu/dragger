const dragit = document.querySelector('#dragger');
dragit.addEventListener('dragstart', (e) => {
  dragit.style.opacity = 0.5;
});
dragit.addEventListener('dragend', (e) => {
  dragit.style.opacity = '';
});
