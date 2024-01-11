import { Component, DoCheck, Input, OnChanges, SimpleChanges, Output, EventEmitter, ContentChild, ElementRef, AfterContentChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements AfterContentInit {
  

  @ContentChild('showPara') paraRef?: ElementRef;

  ngAfterContentInit(): void {
    const content = this.paraRef?.nativeElement;
    content.style.fontStyle = 'Italic';
    content.style.fontWeight = '350';
    content.style.color = 'red';
    
  }
}
