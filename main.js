'use strict'

class GoodsList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];
        this._fetchGoods();
        this.render();
        this.getSum();
    }
    _fetchGoods() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 1350, img: 'img/goods-img.jpg' },
            { id: 2, title: 'Mouse', price: 100, img: 'img/goods-img.jpg' },
            { id: 3, title: 'Keyboard', price: 250, img: 'img/goods-img.jpg' },
            { id: 4, title: 'Gamepad', price: 150, img: 'img/goods-img.jpg' },
        ]
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new GoodsItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
    getSum() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;

        }
        console.log(sum);
        return sum


    }
}

class GoodsItem {
    constructor(product, img = 'img/goods-img.jpg') {
        this.img = img;
        // this.id= product.id;
        this.title = product.title;
        this.price = product.price;
        this.render();
    }
    render() {
        return `<div class="goods-item" ">
    <img class="img-wrp" src="${this.img}" alt="{title + 'photo'}"/>          
        <h3 >${this.title}</h3>
        <p>${this.price + ' rub'}</p>
        <button class="cart-button">Купить</button>
    </div>`
    }
}



let list = new GoodsList();