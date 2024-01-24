import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
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




export class AppComponent {

  constructor(private http: HttpClient){}

  userId:string = "";
  deleteData(){
    if(!this.userId)
    {
      alert("please enter valid user id");
      return;
    }
    this.http.delete(`http://localhost:3000/users/${this.userId}`)
    .subscribe({
      next:()=>{
        console.log("Deleted Successfully");
      },
      error: (err)=>{
        console.error(`Error! ${err}`);
      }
    })
  }


}