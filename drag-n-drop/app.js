const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const colHeaders = document.querySelectorAll('.col-header');

const dragstart = (event) => {
    event.target.classList.add('hold');
    setTimeout(() =>
        event.target.classList.add('hide'),
        0);
};

const dragend = (event) => {
    event.target.className = 'item';
};

const dragover = (event) => {
    event.preventDefault();
};

const dragenter = (event) => {
    event.target.classList.add('hovered');
};

const dragleave = (event) => {
    event.target.classList.remove('hovered');
};

const dragdrop = (event) => {
    event.target.append(item);
    event.target.classList.remove('hovered');
};

item.addEventListener('dragstart', dragstart);

item.addEventListener('dragend', dragend);

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover); // над
    placeholder.addEventListener('dragenter', dragenter); //на территории
    placeholder.addEventListener('dragleave', dragleave); //вышли
    placeholder.addEventListener('drop', dragdrop); //отпустили
});

