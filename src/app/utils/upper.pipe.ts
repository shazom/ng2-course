import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'happy'})
export class UpperPipe implements PipeTransform{

  public transform(value : string) : string{
    return value + "!"
  }

}
