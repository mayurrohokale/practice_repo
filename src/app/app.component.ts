import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { Directive } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { DemoService } from './dependencies/demo.service';
import { FormControl, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

usernameControl = new FormControl('',[
  Validators.required,
  Validators.minLength(4),
  Validators.maxLength(10),
  Validators.pattern('^[a-zA-Z0-9]+$')
]);

showValue()
{
  console.log('Value:', this.usernameControl.value);
  console.log('validation status:',this.usernameControl.valid);
  console.log(this.usernameControl.errors);
}





}


