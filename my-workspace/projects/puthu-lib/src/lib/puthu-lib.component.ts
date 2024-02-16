import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-puthu-lib',
  template: `
    <p>new-lib works!</p>
    Good Morning {{ username }}
    <div>
      <button (click)="btnClicked()">Just click</button>
    </div>
  `,
  styles: [],
})
export class MyLibComponent {
  @Input() username: string = '';
  @Output() greet = new EventEmitter();

  btnClicked() {
    this.greet.emit('Submit action done');
  }
}
