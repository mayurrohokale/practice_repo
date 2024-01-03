import { Component } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

  display:boolean = false;

  

  fullstackDev = [{
    id:1,
    name : 'angular'
  },
  {
    id:2,
    name : 'React'
  },
  {
    id:3,
    name : 'Node.js'
  },
  {
    id:4,
    name : 'Mongo'
  }]
}


