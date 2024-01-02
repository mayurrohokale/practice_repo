import { Component } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

  val:string = '';
  count:string='';

  isshift()
  {
    console.log("shift + Yis pressed");
  }
  
}