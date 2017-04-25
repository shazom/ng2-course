import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countBy'
})
export class CountByPipe implements PipeTransform {

  /**
   *
   * @param value
   * @param key
   * @param prop
   * @returns {null}
   */
  transform(value: any, key : string, prop : any): any {
    return value.filter(item => item[key] === prop).length;
  }

}
