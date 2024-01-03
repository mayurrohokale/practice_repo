import { Component } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

  nm: string = '';
  em: string = '';
  formSubmitted:boolean = false;
  emailIsValid:boolean = false;

  checkEmailValidation(em:string){
    if(em.includes('@') && em.includes('.'))
    {
      this.emailIsValid = true;
    }
    else
    {
      this.emailIsValid = false;
    }
  }

  showMessage(){
    if(this.nm && this.emailIsValid)
    {
      this.formSubmitted = true;
    }
    else{
      this.formSubmitted = false;
    }
  }

}

