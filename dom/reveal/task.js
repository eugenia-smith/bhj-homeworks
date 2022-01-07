'use strict';

let hiddenBlocks = Array.from(document.getElementsByClassName('reveal'));

let isVisible = function () {
for (let hiddenBlock of hiddenBlocks) {
    
        if (hiddenBlock.getBoundingClientRect().top < window.innerHeight && hiddenBlock.getBoundingClientRect().bottom > 0) {
            hiddenBlock.classList.add('reveal_active')
        } else {
            hiddenBlock.classList.remove('reveal_active')
        }
    };
}

window.addEventListener('scroll', isVisible);

