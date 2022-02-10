'use strict';

let product = document.getElementsByClassName('product');
let productImg = document.getElementsByClassName('product__image');
let productQuantity = document.getElementsByClassName('product__quantity-value');
let productAdd = document.getElementsByClassName('product__add');
let cartProducts = document.querySelector('.cart__products')
let quantityControls = document.getElementsByClassName('product__quantity-controls');
let less = document.getElementsByClassName('product__quantity-control_dec');
let more = document.getElementsByClassName('product__quantity-control_inc');
let cart = document.querySelector('.cart');

for (let i = 0; i < quantityControls.length; i++) {

    less[i].addEventListener('click', () => {
        if (+less[i].parentElement.querySelector('.product__quantity-value').textContent > 0) {
            less[i].parentElement.querySelector('.product__quantity-value').textContent -= 1;
        };
    });

    more[i].addEventListener('click', () => {
        if (+more[i].parentElement.querySelector('.product__quantity-value').textContent >= 0) {
            +more[i].parentElement.querySelector('.product__quantity-value').textContent++;
        };
    });

};


for (let btn of productAdd) {

    btn.onclick = function () {

        let good = this.closest('.product');
        let goodId = good.dataset.id;
        let goodImg = good.querySelector('.product__image').getAttribute('src');
        let goodQnty = good.querySelector('.product__quantity-value').textContent;



        if ((cartProducts.querySelector(`div[data-id="${goodId}"]`)) == null) {

            let goodInCart = document.createElement('div');
            goodInCart.innerHTML = `<div class="cart__product" data-id="${goodId}"> <img class="cart__product-image" src="${goodImg}"> <div class="cart__product-count">${goodQnty}</div></div>`
            cartProducts.insertAdjacentElement('afterbegin', goodInCart);

        } else {
            let newQnty = +cartProducts.querySelector(`div[data-id="${goodId}"]`).querySelector('.cart__product-count').innerText + +goodQnty;
            cartProducts.querySelector(`div[data-id="${goodId}"]`).querySelector('.cart__product-count').innerText = newQnty;
        };

    }
}



