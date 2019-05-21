import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [
  ]
})
export class ListComponent implements OnInit {

  new_item = '';

  constructor(private ss: ShareService) {}

  ngOnInit() {}

  add() {
    this.ss.add(this.new_item);
    this.new_item = '';
  }

  remove(index) {
    this.ss.list.splice(index, 1);
    this.ss.save();
  }

  apply(item){
    this.ss.change(item[0],item[1]);
  }

  get count_items() {
    return this.list.length;
  }

  get list() {
    return this.ss.list;
  }
}
