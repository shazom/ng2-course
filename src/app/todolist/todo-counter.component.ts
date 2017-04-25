import {Component,Input} from '@angular/core';

@Component({
  selector: 'app-todo-counter',
  template: `
    <span class="todo-count">
      <strong>{{amount}}</strong>
      item left
    </span>
  `,
})
export class TodoCounterComponent {

 @Input() amount: number;

}
