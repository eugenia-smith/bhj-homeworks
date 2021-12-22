'use strict';

let images = document.querySelectorAll('.slider__item');
let imagesArr = Array.from(images);
let arrowLeft = document.getElementsByClassName('slider__arrow_prev');
let arrowRight = document.getElementsByClassName('slider__arrow_next');
let n = 0;

arrowRight[0].onclick = function () {
    n = imagesArr.findIndex(item => item.classList.contains('slider__item_active'));
    //console.log(n);
    imagesArr[n].classList.remove('slider__item_active');
    n < imagesArr.length - 1 ? n +=1 : n = 0;
    imagesArr[n].classList.add('slider__item_active');
}

arrowLeft[0].onclick = function () {
    n = imagesArr.findIndex(item => item.classList.contains('slider__item_active'));
    imagesArr[n].classList.remove('slider__item_active');
    n !==0 ? n -=1 : n = imagesArr.length - 1;
    imagesArr[n].classList.add('slider__item_active');
}

