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
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  
  observable = new Observable<number>((observer)=>{
    let count = 0;

    const interval = setInterval(()=>{
      observer.next(count++);
    },1000);

    return()=>{
      clearInterval(interval);
      console.log("Interval Cleared.....");
    }
  });

  

  constructor(){
    const obs =this.observable.subscribe((data)=>{
      console.log("data: ",data);
    });
    setTimeout(()=>{
      obs.unsubscribe();
      console.log("Unsubscribed");
    },5000);
  }

  
   


}
