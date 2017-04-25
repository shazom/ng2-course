import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule, Title} from "@angular/platform-browser";
import {TodolistModule} from "./todolist/todolist.module";
import {UtilsModule} from "./utils/utils.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {LoginModule} from "./login/login.module";
import {RouterModule, Router} from "@angular/router";
import {routes} from "./routes";

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    TodolistModule,
    UtilsModule,
    ReactiveFormsModule,
    HttpModule,
    LoginModule],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor (router : Router, title : Title) {

    title.setTitle("Nir");

    router.events
      .subscribe ( event => {console.log(event); title.setTitle(router.url);});
  }
}
