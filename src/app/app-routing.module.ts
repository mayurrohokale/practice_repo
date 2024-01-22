import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { testGuard } from './test.guard';
import { AppComponent } from './app.component';
import { formGuardGuard } from './form-guard.guard';
import { loadAdminGuard } from './guards/load-admin.guard';
const routes: Routes = [
  {path: 'login', 
  canMatch:[loadAdminGuard],
loadChildren:()=> import('./admin/admin.module').then((m)=> m.AdminModule) },
{path: 'login',
loadChildren:()=> import('./demo/demo.component').then((u)=> u.DemoComponent)},
{path: '**', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
