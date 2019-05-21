import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  //template: '<button>Magic</button>',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [
    // ShareService
  ]
})
export class ListComponent implements OnInit {

  title = 'Hello Angular';
  new_item = '';

  constructor(private ss: ShareService) {}

  ngOnInit() { }

  add() {
    this.ss.add(this.new_item);
    this.new_item = '';
  }

  remove(index) {
    this.ss.list.splice(index, 1);
    this.ss.save();
  }

  apply(item){
    // var index=1;
    this.ss.change(item[0],item[1]);
    // console.log(item);
    // console.log(this.list);
  }

  get count_items() {
    return this.list.length;
  }

  get list() {
    return this.ss.list;
  }

  // set list(val) {
  //   console.log(val);
  // }

  count_items2() {
    return 'asdasd';
  }
}
