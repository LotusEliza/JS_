import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() item = '';
  @Output() itemChange = new EventEmitter();
  @Input() index = 0;

  @Output() remove = new EventEmitter();
  @Output() apply = new EventEmitter();

  showme = false;

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.itemChange.emit('');
  }

  remove2() {
    this.remove.emit(this.index);
  }

  edit() {
    this.showme = true ;
  }

  apply2() {
    this.showme = false ;
    // console.log(this.item);
    // console.log(this.index);
    // this.apply.emit(this.item, this.index);
    this.apply.emit([this.index, this.item])
    // this.apply.emit(this.item);
  }
}
