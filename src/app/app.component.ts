import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, ViewChild, WritableSignal, computed, effect, signal, untracked } from '@angular/core';
import { Directive } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { DemoService } from './dependencies/demo.service';
import { FormControl, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormArray, FormBuilder } from '@angular/forms';
import { urlValidator } from './custom-validators/upperCase-validators';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { from } from 'rxjs';
import { interval } from 'rxjs';
import { timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit{

  counter1 = signal(0);
  counter2 = signal(0);

  counterUpdate = effect(()=> [
    console.log(`Counter 1: ${this.counter1()} \n Counter 2: ${ untracked(()=>  this.counter2()) } `)
  ])

  updateCounter1(){
    this.counter1.update(() => this.counter1() +1);

  }
  updateCounter2(){
    this.counter2.update(()=> this.counter2() + 1);
  }
  ngOnInit(): void {
  
  }

}