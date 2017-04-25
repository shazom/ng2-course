import {AbstractControl} from "@angular/forms";
export class CustomValidator {
  static noSpace(control:AbstractControl) {
    if (control.value.indexOf(' ') >=0) {
      return {
        hasSpace : true
      }
    }
    return null;
  }

  static noNir(control:AbstractControl) {
    if (control.value.indexOf('Nir') ==-1) {
      return {
        hasNir : true
      }
    }
    return null;
  }
}
