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
 
value$ : Observable<number>;

constructor(){
  this.value$ = new Observable<any>((observer)=>{
    setInterval(()=>{
      const date = new Date();
      const estTime = date.toLocaleString('en-US',
      {
        timeZone: "America/New_York",
        dateStyle: 'full',
        timeStyle: 'full'
      });

      observer.next(estTime);

    },1000);
    });
}
  

}