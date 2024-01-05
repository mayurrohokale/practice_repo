import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges {
  @Input() inputValue: string = '';

  previousVal : string | undefined;
  currentVal : string | undefined;
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['inputValue']){
      this.previousVal= changes['inputValue'].previousValue;
      this.currentVal= changes['inputValue'].currentValue;
      console.log(changes);
    
    }
  }
}
