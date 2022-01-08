'use strict'

let fontSizes = Array.from(document.getElementsByClassName('font-size'));
let book = document.getElementById('book');

let changeFont = function (evt) {
    evt.preventDefault();
    let activeElement = document.querySelector('.font-size_active');

    activeElement.classList.remove('font-size_active');
    book.classList.remove('book_fs-big');
    book.classList.remove('book_fs-small');
    
    this.classList.add('font-size_active');

    if (this.classList.contains('font-size_small')) {
        book.classList.add('book_fs-small');
        //console.log('small')
    } else if (this.classList.contains('font-size_big')) {
        book.classList.add('book_fs-big');
        //console.log('big')
    }
    //console.log(this.classList)
}

for (let fontSize of fontSizes) {
    fontSize.addEventListener('click', changeFont)
}

