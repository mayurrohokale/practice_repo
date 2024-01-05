import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {

count : number = 0;


ngOnInit(): void {
  this.startCounter();
}
startCounter(){
  setInterval(()=>{
    if(this.count <= 5){
      console.log(this.count++);
    }
  },1000);
}




//  constructor(){
//   console.log("calling from constructor - ",this.inputValue)
//  }
}

