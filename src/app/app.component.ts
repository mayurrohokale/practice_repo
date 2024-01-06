import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent  {

  nm = '';
  em = '';
  ph ='';
  add = '';
  showHeading: boolean = false;
  submitted: boolean = false;
  qualification = [{school:'', degree:'', year:''}];

  addqualification(){
    this.qualification.push({school:'', degree:'', year:''});
  }

  submit() {
    this.submitted = true;
    this.showHeading = false;
  }

  edit(){
      this.submitted =false;
      this.showHeading = true;
  }




//  constructor(){
//   console.log("calling from constructor - ",this.inputValue)
//  }
}

