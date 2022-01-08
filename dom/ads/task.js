'use strict';

let rotateAdvs = function () {
    let activeElement = document.querySelector('.rotator__case_active');
    let rotatorBox = document.querySelector('.rotator');

    if (activeElement.nextElementSibling !== null) {
        activeElement.classList.remove('rotator__case_active');
        activeElement.nextElementSibling.classList.add('rotator__case_active');
    } else {
        rotatorBox.firstElementChild.classList.add('rotator__case_active');
        activeElement.classList.remove('rotator__case_active');
    }
}

setInterval(rotateAdvs, 1000);

