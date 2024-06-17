let time = 12 * 60;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');

let timerInterval;

function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (time > 0) {
        time--;
    } else {
        clearInterval(timerInterval);
        alert('¡Tiempo terminado!');
    }
}

function startTimer() {
    if (timerInterval) return;

    timerInterval = setInterval(updateTimer, 1000);
}

startButton.addEventListener('click', startTimer);