import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private ss: ShareService) {}

  ngOnInit() {
  }

    get cart() {
        return this.ss.cart;
    }

    get products() {
        return this.ss.products;
    }

    remove(index) {
        console.log(index)
        this.ss.cart[index]=null;
        this.ss.save();
        console.log(this.ss.cart)
    }

    total(){
        var total = 0;
        for (var i in this.ss.cart) {
            var prod = this.ss.products[i];
            var count = this.ss.cart[i];
            total += prod.price * count;
        }
        return total;
    }
}