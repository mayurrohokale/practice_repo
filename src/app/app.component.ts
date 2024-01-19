import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { Directive } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { DemoService } from './dependencies/demo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {




  formSubmit(myForm: NgForm)
  {
    if(myForm.valid)
    {
      const formsvalue = JSON.stringify(myForm.value);
      console.log(formsvalue);
      console.log('%c Form submitted successfully', 'color: green; form-weight: 400; font-size: 15px;');
    }
    else
    {
      alert("please fill up the required fields");
    }
  }
  resetValue(myForm: NgForm)
  {
    myForm.resetForm();
  }
  setDefault(myForm : NgForm)
  {
    myForm.resetForm({
      name:'Default Name',
      email: 'default@gmail.com',
    });
  }

}


