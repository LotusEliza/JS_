import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

      constructor(private ss: ShareService) {}

      ngOnInit() {}

      get products() {
         return this.ss.products;
      }

      add(index) {
          if(void 0 === this.ss.cart[index]){
              this.ss.cart[index]=1;
          } else {~
              this.ss.cart[index]++;
          }
          this.ss.save();
          this.ss.count();
      }
}