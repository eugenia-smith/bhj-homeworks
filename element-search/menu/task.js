'use strict';

let menuLink = document.querySelectorAll('.menu__link');
let linksArr = Array.from(menuLink);

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function () {
        let parentLi = menuLink[i].closest('li');
        let subMenu = parentLi.querySelector('.menu_sub');

        if (subMenu !== null) {
            subMenu.classList.toggle('menu_active');

        } else {
            //console.log('reload');
            return true;

        }

        return false;
    }
}

