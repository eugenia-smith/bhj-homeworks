'use strict'

let listItem = document.getElementsByClassName('dropdown__item');
let itemsArray = Array.from(listItem);
let mainValue = document.querySelector('.dropdown__value');
let mainList = document.querySelector('.dropdown__list');

let showList = function () {
    mainList.classList.toggle('dropdown__list_active');
}

mainValue.addEventListener('click', showList);

let changeValue = function (evt) {
    evt.preventDefault();
    mainValue.textContent = this.textContent;
    showList();
}

for (let i = 0; i < itemsArray.length; i++) {
    itemsArray[i].addEventListener('click', changeValue);
}



