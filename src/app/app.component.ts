import { Component } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

  nm = '';
    em = '';
    ph ='';
    add = '';

    submitted: boolean = false;
    qualification = [{school:'', degree:'', year:''}];

    addqualification(){
      this.qualification.push({school:'', degree:'', year:''});
    }

    submit() {
      this.submitted = true;
    }

    edit(){
        this.submitted =false;
    }
}

