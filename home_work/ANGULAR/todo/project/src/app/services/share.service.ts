import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

  list = JSON.parse(localStorage.todo || '[]');

  constructor() { }

  add(val) {
    this.list.push(val);
    this.save()
  }

  change(index, item){
    this.list[index]=item;
    this.save()
  }

  save(){
      localStorage.setItem("todo", JSON.stringify(this.list));
  }
}
