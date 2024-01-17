import { Component, DoCheck, Input, OnChanges, SimpleChanges, Output, EventEmitter, ContentChild, ElementRef, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../dependencies/demo.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  names: string[];

  constructor(private demoservice: DemoService)
  {
    this.names = this.demoservice.getNames();

  }
  
}
