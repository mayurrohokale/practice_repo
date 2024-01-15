import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { Directive } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {


  showJson:boolean=false;
    students = [
      {
        name : "John Doe",
        age: 22,
        gender:'male',
        major:'computer'
      },
      {
        name:'andrwe',
        age:25,
        gender: 'female',
        major: 'mathematic'
      },
      {
        name:"Jane Smith",
        age:21,
        gender: 'male',
        major: 'english'
      }
    ];

    toggleJson(){
      this.showJson =  true;
    }

}


