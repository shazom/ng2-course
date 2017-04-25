
import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, FormArray, FormBuilder, Validators} from "@angular/forms";
import {CustomValidator} from "./customValidator";

@Component({
  selector:'app-root',
  styles: ['input.ng-invalid  {background-color: #ff9174}'],
  template: `

          <form [formGroup]="userForm" (ngSubmit)="register()">
            <fieldset>
              <input type="text" 
                     formControlName="username" 
                     placeholder="username">
              <input type="password" 
                     formControlName="password" 
                     placeholder="password">
            </fieldset>
            <fieldset formGroupName="address">
              <input type="text" 
                     formControlName="city" 
                     placeholder="city">
              <input type="text" 
                     placeholder="street"
                     formControlName="street" >
            </fieldset>
            <fieldset *ngIf="address.valid" formArrayName="phones">
              <legend>Phones</legend>
              <input type="text" 
                     placeholder="phone"
                     *ngFor="let phones of userForm.get('phones').controls; let i=index"
                     [formControlName]="i">
              <button type="button">+</button>
            </fieldset>
            
            <input type="submit"/>
          </form>
          
          <!--<todo-app></todo-app>-->
          <!--<todo-app></todo-app>-->
          <!--<todo-app></todo-app>-->
          
          <!--<h2 *appIf="true"> Test me </h2>-->
          `

})

export class AppComponent implements OnInit {

  private userForm  : FormGroup;
  // private username  : FormControl;
  // private password  : FormControl;

  private address   : FormGroup;
  // private city      : FormControl;
  // private street    : FormControl;

  private phones    : FormArray;

  constructor(builder:FormBuilder) {

    this.address = builder.group({
      city: ['', [Validators.minLength(3), Validators.required]],
      street: ''
    });

    this.userForm = builder.group({
      username: ['', [
        Validators.required,
      CustomValidator.noSpace,
      CustomValidator.noNir]],
      password: '',
      address: this.address,
      phones: builder.array([new FormControl("96666536")])
    });

  }

  ngOnInit(): void {
    const username = this.userForm.get('username');
    username.valueChanges.subscribe(value => console.log(value));
  }

   private register(){
    if (this.userForm.valid) {
      console.log("valid");
    } else {
      console.log("invalid");
    }
    console.log(this.userForm.get("username").errors);
  }

}
