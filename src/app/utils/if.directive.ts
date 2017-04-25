import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  private template: TemplateRef<any>;
  private container: ViewContainerRef;

  constructor(template : TemplateRef<any>, container:ViewContainerRef) {
    this.template = template;
    this.container = container;
  }

  @Input() set appIf (value:boolean) {
    if (value) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }

}
