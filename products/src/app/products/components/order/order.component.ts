import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  public user = 'Pranusha';
  greet() {
    console.log('btn clicked');
    window.alert(`Hello ${this.user}`);
  }
}
