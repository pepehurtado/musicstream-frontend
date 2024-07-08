import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music Stream';
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }


}
