const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalID = null

const trafficLight = (event) => {
    stopAuto();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red', 'green', 'yellow']
    const color = colors[colorIndex]
    turnOn[color]();
    nextIndex();
}

const stopAuto = () => {
    clearInterval(intervalID)
}

const turnOn = {
    'red': () => img.src = './images/vermelho.png',
    'green': () => img.src = './images/verde.png',
    'yellow': () => img.src = './images/amarelo.png',
    'auto': () => intervalID = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);