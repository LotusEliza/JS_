import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  constructor(private ss: ShareService) {}

  ngOnInit() {}

    get cart() {
        return this.ss.cart;
    }

    get products() {
        return this.ss.products;
    }

    remove(index) {
        this.ss.cart[index]=null;
        this.ss.save();
        this.ss.count();
    }

    total(){
        let total = 0;
        for (let i in this.ss.cart) {
            let prod = this.ss.products[i];
            let count = this.ss.cart[i];
            total += prod.price * count;
        }
        return total;
    }
}