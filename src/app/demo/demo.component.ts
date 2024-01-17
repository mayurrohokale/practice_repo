import { Component, DoCheck, Input, OnChanges, SimpleChanges, Output, EventEmitter, ContentChild, ElementRef, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  id:string = '';

  constructor(private route: ActivatedRoute)
  {
    const params = this.route.snapshot.params;
    this.id = params['id'];
  }

  
  employees =[
    {
      empId: '101',empName:'Joe', empDept:'computer'
    },
    {
      empId: '102', empName:'seoge', empDept:'Mech'
    },
    {
      empId: '103', empName:'tom', empDept:'english'
    },
    {
      empId: '104', empName:'alex', empDept:'Math'
    }
  ];


}
