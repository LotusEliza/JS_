import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item=''; //input property vue
  @Input() index=0;

  @Output() remove = new EventEmitter; 

  constructor() { }

  ngOnInit() {
  }

  remove2(){
    this.remove.emit(this.index);
  }
}
