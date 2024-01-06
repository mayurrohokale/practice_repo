import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent  {

 user = {
  name : 'ABC'
 };
 changeusername(){
  this.user.name = 'XYZ'
 }



//  constructor(){
//   console.log("calling from constructor - ",this.inputValue)
//  }
}

