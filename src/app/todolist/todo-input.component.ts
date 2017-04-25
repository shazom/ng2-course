import {Component, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
   <input class="new-todo"
           [placeholder]="text"
           #input
           (keydown.enter)="add.emit(input.value); input.value=''" 
           autofocus>
  `,
  styles: []
})
export class TodoInputComponent {

  text = "What needs to be done?";

  @Output() add : EventEmitter<string>;
  @ViewChild('input') input: ElementRef;

  constructor() {
    this.add =  new EventEmitter<string>();
  }

  private dispachEvent(value) {
    console.log(value);
  }

}
