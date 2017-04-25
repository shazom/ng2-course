import {Component, OnInit, Input, ChangeDetectorRef, NgZone, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-todo-title',
  template: `
    <h1>{{title}}</h1>
  `,
  styles: []
})
export class TodoTitleComponent implements OnInit, OnDestroy {
  @Input() title : string;

  // private cd: ChangeDetectorRef;

    // setTimeout( () => this.title = "todos", 5000);

    constructor(cd : ChangeDetectorRef, zone: NgZone) {

      // this.cd = cd;
      // cd.detach();

      // cd.detectChanges();

      zone.runOutsideAngular(() => {
        setTimeout ( () => {
          this.title = "New Title";
          cd.detectChanges();
        }, 5000
        );
      });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // ChangeDetectorRef.
  }

}
