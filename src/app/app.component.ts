import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { Directive } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { DemoService } from './dependencies/demo.service';
import { FormControl, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!*&])(?!\s).*$/)
        ]
      ]
    })
  }

  formSubmit(){
    if(this.myForm.valid)
    {
      console.log(this.myForm.value);
      console.log("Form Submitted Successfully");
    }
  }
}
