const start = document.getElementById('start');
const timeList = document.getElementById('time-list');
const screens = document.querySelectorAll('.screen');
const timeEl = document.getElementById('time');
const board = document.getElementById('board');
const colors = ['#ff0000', '#ADFF2F', '#ffa500', '#FF00FF', '#ffff00','#FFFFFF', '#008000', '#0000FF', '#00BFFF', '#8A2BE2'];
let time = 0;
let score = 0;

start.addEventListener('click', e => {
    e.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', e => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', ev => {
    if (ev.target.classList.contains('circle')) {
        score++;
        ev.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let currentTime = --time;
        if (currentTime < 10) {
            currentTime = `0${currentTime}`;
        }
        setTime(currentTime);
    }
}


function setTime(time) {
    timeEl.textContent = `00:${time}`;
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`;

}

function createRandomCircle() {
    const circle = document.createElement('div');
    const {width, height} = board.getBoundingClientRect();
    const size = getRandomNumber(10, 60);
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    const circleColor = colors[Math.floor(Math.random() * colors.length)];

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.backgroundColor = circleColor;
    circle.style.backgroundImage = `-webkit-gradient(linear, left bottom, left top, color-stop(0, ${circleColor}), color-stop(1, ${circleColor}))`;
    circle.style.boxShadow = `0 0 5px ${circleColor}`;
    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



