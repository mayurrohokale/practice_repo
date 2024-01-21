import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { testGuard } from './test.guard';
import { AppComponent } from './app.component';
import { formGuardGuard } from './form-guard.guard';
const routes: Routes = [
  {path:'', redirectTo: '/app', pathMatch: 'full'},
  {path:'app', component: AppComponent},
  {path: 'login', component: LoginComponent, canDeactivate:[formGuardGuard]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
