import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

  products = [
    { name: 'Lemon', price: 2},
    { name: 'Banana', price: 12},
    { name: 'Apple', price: 22},
  ];

  //cart = [];

  cart = JSON.parse(localStorage.cart || '[]');

  constructor() { }

    save(){
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }

}
