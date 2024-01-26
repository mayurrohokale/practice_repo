import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, ViewChild, signal } from '@angular/core';
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

  arr = signal([1,2,3,4]);

  modifyArray(){
    this.arr.mutate((val)=> val[0] = 10);
  }

  cart = signal([{
    name: 'product-1',
    email:'xyz@gmail.com'
  }
    
  ]);

  ngOnInit(): void {
   this.cart.mutate((cartDetails)=> [
    cartDetails.push({name: 'product-2', email: 'pqr@gmail.com'}),
    cartDetails.push({name: 'product-3', email: 'efg@gmail.com'})
   ]);
   console.log(this.cart());
  }

}