import {Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {LoginComponent} from "./login/login/login.component";
import {TodoAppComponent} from "./todolist/todo-app.component";
import {Observable} from "rxjs";

class isAdmin implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return undefined;
  }

}
export const routes: Routes =  [
  {
    path:'login',
    component:LoginComponent,
    // loadChildren: 'list.module.js' //lazy loading
  },
  {
    path:'list',
    component:TodoAppComponent
  },
  /*{
    path:'list/:id/:name',
    component:TodoAppComponent
  },*/
];
