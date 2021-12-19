'use strict';

let killed = document.getElementById('dead');
let lost = document.getElementById('lost');
let counterKilled = 0;
let counterLost = 0;


for (let index = 1; index <= 9; index++) {
    function getHole(index) {
        let clickedHole = document.getElementById(`hole${index}`)
        return clickedHole;
        
    };
    
    let hole = getHole(index);
    
    hole.onclick = function() {
        if (hole.className.includes( 'hole_has-mole' )) {
            counterKilled++;
            killed.textContent = counterKilled;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }
    }

}

