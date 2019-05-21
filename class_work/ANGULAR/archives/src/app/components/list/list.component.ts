import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [
    //ShareService
  ],
})
export class ListComponent implements OnInit {

  title = "Hello world";
  // list = ['one', 'two', 'three'];
  new_item = '';

  constructor(private ss: ShareService) { }

  ngOnInit() {
  }

  add(){
    this.list.push(this.new_item);
    this.new_item = '';
  }

  remove(index){
    this.list.splice(index, 1);
  }

   // analog computed functions in VUE
  get count_items(){
    return this.list.length;
  }

  get list(){
    return this.ss.list;
  }
}