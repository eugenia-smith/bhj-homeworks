'use strict';

let mainModal = document.getElementById('modal_main');
let closingCross = document.getElementsByClassName('modal__close');
let successBtn = mainModal.querySelector('.show-success');
let doGood = document.getElementById('modal_success');

mainModal.classList.add('modal_active');

let closingCrossArr = Array.from(closingCross);

for (let i = 0; i < closingCrossArr.length; i++) {
    closingCrossArr[i].onclick = function () {
        mainModal.classList.remove('modal_active');
        doGood.classList.remove('modal_active');

        return false;
    }

}


successBtn.onclick = function () {
    mainModal.classList.remove('modal_active');
    doGood.classList.add('modal_active');

    return false;

}