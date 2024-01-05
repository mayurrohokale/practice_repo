import { Component } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

 inputValue: string = 'new Value';


 updateValue(){
  this.inputValue = "app component";
 }
//  constructor(){
//   console.log("calling from constructor - ",this.inputValue)
//  }
}

