import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { Directive } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { DemoService } from './dependencies/demo.service';
import { FormControl, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormArray, FormBuilder } from '@angular/forms';
import { urlValidator } from './custom-validators/upperCase-validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  validateURL: FormGroup;

  constructor(private fb: FormBuilder)
  {
    this.validateURL = this.fb.group({
      checkURL:['',Validators.required, urlValidator]
    });
  }

  validate()
  {
    if(!this.validateURL.valid)
    {
      alert("Please enter correct URL");
      return false;
    }
    else{
      return alert("URL is Valis");
    }
  }
}
