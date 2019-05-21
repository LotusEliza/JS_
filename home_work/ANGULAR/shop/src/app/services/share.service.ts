import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

    products = [
        {name: 'Lemon', price: 2},
        {name: 'Banana', price: 12},
        {name: 'Apple', price: 22},
    ];

    counter;

    cart = JSON.parse(localStorage.cart || '[]');

    constructor() {}

    save() {
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }

    setCounter(val) {
        this.counter = val;
    }

    getCounter() {
        return this.counter;
    }

    count() {
        let counter = 0;
        for (let index in this.cart) {
            counter += +this.cart[index];
        }
        this.setCounter(counter);
        return counter;
    }
}