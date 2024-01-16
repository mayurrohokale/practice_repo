import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path: 'login', component: LoginComponent, children:[
      {
        path: '', redirectTo: 'signup' ,  pathMatch: 'full'
      },
      {
      
        path: 'signup', component: SignupComponent
      },
      {
        path: 'demo', component: DemoComponent
      },
    ]
  },
  {path:'**', redirectTo:'/login', pathMatch: 'full'},
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
