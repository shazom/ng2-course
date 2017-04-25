import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app.component';
import { TodoCounterComponent } from './todo-counter.component';
import { TodoClearBtnComponent } from './todo-clear-btn.component';
import { TodoToggleComponent } from './todo-toggle.component';
import { TodoTitleComponent } from './todo-title.component';
import { TodoItemsComponent } from './todo-items.component';
import { TodoItemComponent } from './todo-item.component';
import { TodoInputComponent } from './todo-input.component';
import { TodoHeaderComponent } from './todo-header.component';
import { TodoMainComponent } from './todo-main.component';
import { TodoFooterComponent } from './todo-footer.component';
import {Todolist} from "./todolist.service";
import {UtilsModule} from "../utils/utils.module";

@NgModule({
  imports: [
    CommonModule,
    UtilsModule
  ],
  declarations: [TodoAppComponent, TodoCounterComponent, TodoClearBtnComponent, TodoCounterComponent, TodoToggleComponent, TodoTitleComponent, TodoItemsComponent, TodoItemComponent, TodoInputComponent, TodoHeaderComponent, TodoCounterComponent, TodoMainComponent, TodoFooterComponent],
  exports: [TodoAppComponent],
  providers: [Todolist]
})
export class TodolistModule { }
