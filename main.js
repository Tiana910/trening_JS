'use strict'

const goods = [
    { id: 1, title: 'Notebook', price: 1000, img: 'img/goods-img.jpg' },
    { id: 2, title: 'Mouse', price: 100, img: 'img/goods-img.jpg' },
    { id: 3, title: 'Keyboard', price: 250, img: 'img/goods-img.jpg' },
    { id: 4, title: 'Gamepad', price: 150, img: 'img/goods-img.jpg' },
];


const renderGoodsItem = (img, title, price) => {
    return `<div class="goods-item" data-id="${this.id}">
    <img class="img-wrp" src="${img}" alt="${title + 'photo'}"/>          
        <h3 >${title}</h3>
        <p>${price + ' rub'}</p>
        <button class="cart-button">Купить</button>
    </div>`
};

const renderGoodsList = (list) => {
    document.querySelector('.goods-list').innerHTML = list.map((item) => renderGoodsItem(item.img, item.title, item.price)).join('');
}

renderGoodsList(goods);