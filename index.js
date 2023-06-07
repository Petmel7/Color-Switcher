const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

let intervalId

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

function startColorChange() {
    startButton.disabled = true;
    intervalId = setInterval(changeBackgroundColor, 1000);
}

function changeBackgroundColor() {
    const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[colorIndex];
}

function stopColorChange() {
    startButton.disabled = false;
    clearInterval(intervalId);
};