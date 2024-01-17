import { Component, DoCheck, Input, OnChanges, SimpleChanges, Output, EventEmitter, ContentChild, ElementRef, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {


  employees =[
    {
      id: '101',name:'Joe', empDept:'computer'
    },
    {
      id: '102', name:'seoge', empDept:'Mech'
    },
    {
      id: '103', name:'tom', empDept:'english'
    },
    {
      id: '104', name:'alex', empDept:'Math'
    }
  ];

  id:string = '';
  name: string = '';

  constructor(private route: ActivatedRoute)
  {
    this.route.queryParams.subscribe((params)=>
    {
      this.id = params['id'];
      this.name = params['name'];
      console.log(params);    })
  }
}
