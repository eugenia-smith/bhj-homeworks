'use strict'

let topInputs = document.querySelectorAll('.interests_main > ul > li > label > input');
// let firstListOptions = topInputs[0].closest('li').querySelector('ul').querySelectorAll('input');
// let secondListOptions = topInputs[1].closest('li').querySelector('ul').querySelectorAll('input');


function eventCallback() {
    let listOptions = this.closest('li').querySelector('ul').querySelectorAll('input');

    for (let listOption of listOptions) {
        listOption.checked = this.checked;
    }
}


for (let topInput of topInputs) {
    topInput.addEventListener('change', eventCallback)
}