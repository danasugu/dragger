const dragit = document.querySelector('#dragger');
const boxes = document.querySelectorAll('.box');

dragit.addEventListener('dragstart', (e) => {
  dragit.style.opacity = 0.01;
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
  box.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  box.addEventListener('drop', (e) => {
    e.preventDefault();
    console.log('dropped');
    e.target.appendChild(dragit);
  });
});
