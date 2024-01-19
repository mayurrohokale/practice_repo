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
  isSubmitted: boolean = false;

  constructor(private formbuilder: FormBuilder)
  {
    this.myForm = this.formbuilder.group({
      userDetails: this.formbuilder.group({
        fname:['',Validators.required],
        email:['', [Validators.required, Validators.email]],
        password:['', Validators.required],
      }),
      additionalDetails: this.formbuilder.group({
        mobile:['',[Validators.required, Validators.pattern(/^\d{10}$/)]],
        address:['', Validators.required],
        country:['', Validators.required],
        gender:['', Validators.required],
      }),
      feedbacl: this.formbuilder.group({
        comments:[''],
      })
    });
  }

  // get userDetails(){
  //   return this.myForm.get('userDetails') as FormGroup;
  // }
  get additionalDetails(){
    return this.myForm.get('additionalDetails') as FormGroup;
  }
  

  step: any = 1;

  btnPrevious()
  {
    this.step -= 1;
  }
  btnNext()
  {
    // const userDetailsGroup = this.myForm.get('userDetails') as FormGroup;
    const additionalDetailsGroup = this.myForm.get('additionalDetails') as FormGroup;
    // if(userDetailsGroup.invalid && this.step == 1){
    //   return;
    // }
    if(additionalDetailsGroup.invalid && this.step == 2){
      return;
    }
    if(this.step < 3)
    {
      this.step += 1;
    }
    
   
  }

  formSubmit()
  {
    if(this.myForm.valid)
    {
      this.isSubmitted = true;
    }
    console.log(this.myForm.value);
  }
}
