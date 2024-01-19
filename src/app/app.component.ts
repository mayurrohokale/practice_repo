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

employeeForm: FormGroup;

constructor(private fb: FormBuilder)
{
  this.employeeForm = this.fb.group({
    employees: this.fb.array([]),
  });
}

get employees(): FormArray {
  return this.employeeForm.get('employees') as FormArray;
}

addEmployee():void{
  const employeeGroup = this.fb.group({
    name: [''],
    job: [''],
  });
  this.employees.push(employeeGroup);
}

submitForm()
{
  console.log(this.employeeForm.value);
}

}
