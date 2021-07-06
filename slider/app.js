const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const mainSlideCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlideIndex = 0;

sidebar.style.top = `-${(mainSlideCount - 1) * 100}vh`;

downButton.addEventListener('click', () => {
    changeSlide('down')
});

upButton.addEventListener('click', () => {
    changeSlide('up')
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === mainSlideCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = mainSlideCount - 1
        }
    }

    const  height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowUp') {
        changeSlide('up')
    } else if (event.code === 'ArrowDown') {
        changeSlide('down')
    }
});

