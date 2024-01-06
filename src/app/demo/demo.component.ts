import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements DoCheck {
  @Input() user: any;

  private previousUsername: string | undefined;
 
  ngDoCheck(): void {
    if (this.user.name != this.previousUsername) {
      this.previousUsername !== this.user.name;
      console.log('ngDocheck called - username changes');
  }
}
}
