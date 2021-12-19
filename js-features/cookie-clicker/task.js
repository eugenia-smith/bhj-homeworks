'use strict';
let bisquit = document.getElementById('cookie');
let clickCounter = document.getElementById('clicker__counter');
let counter = 0;


function countClicks() {
    bisquit.width = 250;

    counter++;
    clickCounter.textContent = counter;

    if (counter % 2) {
        bisquit.width = 200
    }

}
bisquit.onclick = countClicks;