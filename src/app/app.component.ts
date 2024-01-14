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

  employees = [
    {name: 'jason smith', state: 'california', salary: 500000},
    {name: 'mark lewis', state: 'new york', salary:80000},
    {name: 'tim cook', state: 'florida', salary: 90000},
    {name:'sean parker', state:'san andreas', salary:40000},
  ];
}


