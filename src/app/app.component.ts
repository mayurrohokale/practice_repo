import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent{

value = 'Mayur';
message = '';
recieveMessage(event:any){
  this.message = event;
}


//  constructor(){
//   console.log("calling from constructor - ",this.inputValue)
//  }
}

