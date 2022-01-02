'use strict';

let menuLink = document.querySelectorAll('.menu__link');
let linksArr = Array.from(menuLink);

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function () {
        let parentLi = menuLink[i].closest('li');
        //console.log(parentLi);
        let subMenu = parentLi.querySelector('.menu_sub');

        if (subMenu !== null && subMenu.classList.contains('menu_active') == false) {
            subMenu.classList.add('menu_active');
            //console.log(subMenu);

        } else {
            return true;

        }

        return false;
    }
}

