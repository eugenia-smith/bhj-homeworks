'use strict';
let bisquit = document.getElementById('cookie');
let clickCounter = document.getElementById('clicker__counter');
let counter = 0;


//console.log(clickCounter.textContent);
function countClicks() {
    bisquit.width = 250;

    counter ++;
    console.log(counter);
    clickCounter.textContent = counter;

}
bisquit.onclick = countClicks;

