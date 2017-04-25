import {Directive, ElementRef, HostListener, Renderer, HostBinding} from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {

  constructor(private element : ElementRef, private renderer:Renderer) {}

  @HostBinding() style = '';

  @HostListener('mouseover')
  private mark() {
    this.setBackground(true);
  }

  @HostListener('mouseout')
  private unmark() {
    this.setBackground(false);
  }

  private setBackground(flag : boolean) {
    const _color = flag ? 'yellow' : '';

    // this.style = `background-color',$(_color)`;

    this.renderer.setElementStyle(
      this.element.nativeElement, 'background-color', _color);
  }

}
