import { Component, OnInit } from '@angular/core';
import {Todolist} from "./todolist.service";
import {StorageService} from "../utils/storage.service";
import {ActivatedRoute} from "@angular/router";

const TODOLIST =
  {
    provide   : Todolist,
    useFactory: storage => new Todolist(storage, 'KEY'),
    deps      : [StorageService]
  };

@Component({
  selector: 'todo-app',
  providers: [TODOLIST],
  template: `
  <section class="todoapp">
    <app-todo-header>
        <app-todo-title [title]="appTitle"></app-todo-title>
        <app-todo-input (add)="list.addItem($event)"></app-todo-input>
    </app-todo-header>
    <app-todo-main>
         <app-todo-toggle (toggle)="list.toggle($event)"></app-todo-toggle>
         <app-todo-items [items]="list.items"></app-todo-items>  
    </app-todo-main>
    <app-todo-footer>
      <app-todo-counter [amount]="list.items | countBy:'done':false"></app-todo-counter>
      <app-todo-clear-btn label="Archive all" (clear)="list.removeDone()"></app-todo-clear-btn>
    </app-todo-footer>
  </section>
  `,
})
export class TodoAppComponent implements OnInit {

  private appTitle: string;
  private list: Todolist;

  constructor(list:Todolist, route:ActivatedRoute) {
    this.appTitle = "TODOS";
    this.list = list;

    route.queryParams.subscribe(param => console.log(param));
  }

  ngOnInit() {
  }

}
