import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent{

  Message = '';

  recieve(event:any){
    this.Message = event;
  }

//  constructor(){
//   console.log("calling from constructor - ",this.inputValue)
//  }
}

