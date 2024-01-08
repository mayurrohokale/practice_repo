import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent{

courses: {id: number; name: string}[]= [
  {id:1, name: 'Mayur'},
  {id:2, name: 'Rphan'}
  
];

//  constructor(){
//   console.log("calling from constructor - ",this.inputValue)
//  }
}

