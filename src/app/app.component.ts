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
  constructor(private formbuilder: FormBuilder)
  {
    this.myForm = this.formbuilder.group({
      userDetails: this.formbuilder.group({
        fname:['',Validators.required],
        email:['', [Validators.required, Validators.email]],
        password:['', Validators.required],
      }),
      additionalDetails: this.formbuilder.group({
        mobile:['', [Validators.required, Validators.maxLength(10)]],
        address:['', Validators.required],
        country:['', Validators.required],
        gender:['', Validators.required],
      }),
      feedbacl: this.formbuilder.group({
        comments:[''],
      })
    });
  }


  step: any = 1;

  btnPrevious()
  {
    this.step -= 1;
  }
  btnNext()
  {
    this.step += 1;
  }

  formSubmit()
  {
    console.log(this.myForm.value);
  }
}
