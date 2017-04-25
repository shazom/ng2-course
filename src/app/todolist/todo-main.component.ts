import {Component, OnInit, Input} from '@angular/core';
import {Item} from "./todolist.service";

@Component({
  selector: 'app-todo-main',
  template: `
    <section class="main">
      <ng-content></ng-content>
    </section>
  `,
  styles: []
})
export class TodoMainComponent {

}
