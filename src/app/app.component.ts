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
import { of } from 'rxjs';
import { from } from 'rxjs';
import { interval } from 'rxjs';
import { timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

  constructor(private http: HttpClient){}

  putData(){
    this.http.get<any>('http://localhost:3000/users/101').subscribe((updatedData)=>{
      updatedData.name = 'GHI';
      updatedData.email = 'ghi@gmail.com';


      this.http.put('http://localhost:3000/users/103', updatedData).subscribe({ next: (response)=>{
        console.log("user updated : ", response);
        },

        error:(err)=>{
          console.error("Error updating the Data: ", err);
        }
      });

    })

   
  }

}