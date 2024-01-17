function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const collection = document.getElementById('boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');

btnCreate.addEventListener('click', () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
  
});

btnDestroy.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    collection.innerHTML = '';
    
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10 + 'px';
      box.style.width = box.style.height = size;
      box.style.backgroundColor = getRandomHexColor();
      collection.appendChild(box);
    }
    input.value = '';
  }
}
function destroyBoxes() {
  collection.innerHTML = '';
}