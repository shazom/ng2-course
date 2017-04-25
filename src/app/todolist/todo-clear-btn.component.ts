import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-clear-btn',
  template: `
    <button (click)="clear.emit()" 
            class="clear-completed">{{label}} </button>
  `
})
export class TodoClearBtnComponent implements OnInit {

  @Input() label : string;
  @Output() clear = new EventEmitter<void>();

  constructor() { }

  test(event) {
    // event.preventDefault();
    // console.log (event);
  }

  ngOnInit() {
  }

}
