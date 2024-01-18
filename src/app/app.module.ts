import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignupComponent } from './signup/signup.component';
import { DemoComponent } from './demo/demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleDirective } from './example.directive';
import { HighlightElementDirective } from './highlight-element.directive';
import { AppendTextPipe } from './append-text.pipe';
import { ROUTES } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { DemoService } from './dependencies/demo.service';
import { PowerService } from './dependencies/power.service';
import { admin_data } from './dependencies/admin_data';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DemoComponent,
    ExampleDirective,
    HighlightElementDirective,
    AppendTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,
    AdminModule
  ],
  
  providers:[
    DemoService, {provide: admin_data, useValue:admin_data}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
