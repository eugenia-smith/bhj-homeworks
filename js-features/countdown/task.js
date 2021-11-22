'use strict'

let timer = document.getElementById('timer');
let timerStart = parseInt(timer.textContent);


let newTimer = setInterval(() => {
    timer.textContent = timerStart--;

    if (timerStart === 0) {
        clearInterval(newTimer);
        alert('Вы победили в конкурсе!');
    }
}, 1000);





