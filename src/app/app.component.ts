import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-demo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements AfterContentInit, AfterContentChecked {

dataFromParent = '';
ngAfterContentInit(): void {
  console.log("ngAfterContentInit was invoked.....");}
sendDatatoChild():void{
  let random = Math.floor(Math.random()*10);
  this.dataFromParent = "Random Number: "+random;
}

ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked() was invoked......");
}



//  constructor(){
//   console.log("calling from constructor - ",this.inputValue)
//  }
}

