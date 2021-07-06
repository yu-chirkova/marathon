const board = document.getElementById('board');
const colors = ['#ff0000', ' #ffa500', '#ffff00', '#008000', '#0000FF', '#00BFFF', '#8A2BE2'];
const container = document.querySelector('.container');
const SQUARES_NUMBER = 400;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

function setColor(event) {
  const elem = event.target;
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  container.style.boxShadow = `0 0 15px ${color}, 0 0 20px ${color}`;
}

function removeColor(event) {
  const elem = event.target;
  elem.style.backgroundColor = '#1d1d1d';
  elem.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}




