import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <input placeholder="user name"/>
    <input placeholder="password"/>
    <button type="submit">Submit</button>
    
  `,
  styles: []
})
export class LoginComponent implements OnInit, OnDestroy{
  constructor() { }

  ngOnInit() {
    console.log("login init");
  }

  ngOnDestroy(): void {
    console.log("login destroyed");
  }

}
