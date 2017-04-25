
import {Component, OnInit} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import 'rxjs';
import {LoginComponent} from "./login/login/login.component";
import {TodoAppComponent} from "./todolist/todo-app.component";

@Component({
  selector:'app-root',
  template: `

<a [routerLink]="['login']">login</a>
<a [routerLink]="['list']">list</a>

          <router-outlet></router-outlet>

         <!-- <app-login></app-login>

          <todo-app></todo-app>-->
          
          <!--<h2 *appIf="true"> Test me </h2>-->
          `

})

export class AppComponent {

  constructor(http:Http) {

   /* const headers = new Headers();
    headers.append('custom', 'xxxx');

    const search = new URLSearchParams();
    search.append('q', 'shalom');

    http.get(
      "https://jsonplaceholder.typicode.com/todos",
      {headers, search})
      .subscribe(response => response.json());*/

    /*RxJS
    http.get("https://jsonplaceholder.typicode.com/todos")
      .do (response => console.log(response.status))
      .filter(response => response.json())
      .subscribe(todos => console.log(todos))*/


  }
}
