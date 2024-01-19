import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { Directive } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { DemoService } from './dependencies/demo.service';
import { FormControl, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

myForm: FormGroup;

constructor()
{
  this.myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    age: new FormControl('',Validators.min(18)),
  });
}

submitForm()
{
  const userAge = this.myForm.get('age')?.value;
  if(userAge < 18)
  {
    alert('Age must be 18');
    return;
  }
  else if(this.myForm.valid)
  {console.log(this.myForm.value);}
}



}


