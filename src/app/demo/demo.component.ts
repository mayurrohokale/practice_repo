import { Component, DoCheck, Input, OnChanges, SimpleChanges, Output, EventEmitter, ContentChild, ElementRef, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../dependencies/demo.service';
import { PowerService } from '../dependencies/power.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [PowerService, DemoService],
})
export class DemoComponent {

  constructor(public powerservice: PowerService){

  }

  
}
