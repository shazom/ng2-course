import { NgModule } from '@angular/core';
import { UpperPipe } from './upper.pipe';
import { CountByPipe } from './count-by.pipe';
import { MarkerDirective } from './marker.directive';
import { IfDirective } from './if.directive';
import {StorageService} from "./storage.service";

@NgModule({
  providers: [StorageService],
  exports:[UpperPipe, CountByPipe, MarkerDirective, IfDirective],
  declarations: [UpperPipe, CountByPipe, MarkerDirective, IfDirective]
})
export class UtilsModule { }
