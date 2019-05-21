import { Component } from '@angular/core';
import {ShareService} from "./services/share.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    constructor(private ss: ShareService) {}

  getAmount(){
    return this.ss.getCounter();
  }
}
