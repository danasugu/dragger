const dragit = document.querySelector('#dragger');
const boxes = document.querySelectorAll('.box');

dragit.addEventListener('dragstart', (e) => {
  dragit.style.opacity = 0.5;
});
dragit.addEventListener('dragend', (e) => {
  dragit.style.opacity = '';
});

boxes.forEach((box) => {
  box.addEventListener('dragenter', (e) => {
    e.target.classList.add('red');
  });
  box.addEventListener('dragleave', (e) => {
    e.target.classList.remove('red');
  });
});
