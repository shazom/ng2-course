import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-toggle',
  template: `
   <input class="toggle-all"
           type="checkbox"
           #input
           (change)="toggle.emit(input.checked)">
  `,
  styles: []
})
export class TodoToggleComponent {

  @Output() toggle = new EventEmitter<boolean>();

}
