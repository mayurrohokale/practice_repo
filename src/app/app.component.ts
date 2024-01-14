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

  products:{name:string; imageUrl:string}[]=[
    {
      name:'Pre placement Activity',
      imageUrl:'./assests/1.jpg',
    },
    {
        name:"Post Placement Activity",
        imageUrl:'./assests/2.png'
    },
    {
      name:"Placement Drive",
      imageUrl:'./assests/3.jpg'
    },
    {
      name:"Placement Drive",
      imageUrl:'./assests/3.jpg'
    },
    {
      name:"Placement Drive",
      imageUrl:'./assests/3.jpg'
    },
    {
      name:"Placement Drive",
      imageUrl:'./assests/3.jpg'
    },
    {
      name:"Placement Drive",
      imageUrl:'./assests/3.jpg'
    },
    {
      name:"Placement Drive",
      imageUrl:'./assests/3.jpg'
    },
    {
      name:"Placement Drive",
      imageUrl:'./assests/3.jpg'
    }
  ];

  pgSize: number =4;
  startIndex: number = 0;
  endIndex: number = this.pgSize;

  priviousPage(){
    this.startIndex -= this.pgSize;
    this.endIndex -= this.pgSize;
  }

  nextPage(){
    this.startIndex += this.pgSize;
    this.endIndex += this.pgSize;
  }
}


