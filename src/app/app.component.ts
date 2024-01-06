import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements AfterContentInit {

dataFromParent = '';
ngAfterContentInit(): void {
  console.log("ngAfterContentInit was invoked.....");}
sendDatatoChild():void{
  let random = Math.floor(Math.random()*10);
  this.dataFromParent = "Random Number: "+random;
}



//  constructor(){
//   console.log("calling from constructor - ",this.inputValue)
//  }
}

