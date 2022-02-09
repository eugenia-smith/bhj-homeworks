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
        let goodInCart = document.createElement('div');
        goodInCart.innerHTML = '<div class="cart__product" data-id="1"> <img class="cart__product-image" src="image.png"> <div class="cart__product-count">20</div></div>'

        cartProducts.insertAdjacentElement('afterbegin', goodInCart);

        console.log(goodInCart, 'good added');
        console.log(cartProducts);
    }
}



