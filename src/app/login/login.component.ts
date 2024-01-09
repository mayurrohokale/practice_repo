
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Form field with error messages */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {


 @Output() childEvent = new EventEmitter();
 clicktoSend(){
  this.childEvent.emit('Hello From Child');
}
}






