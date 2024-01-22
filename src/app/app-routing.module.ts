import { Component, NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { testGuard } from './test.guard';
import { AppComponent } from './app.component';
import { formGuardGuard } from './form-guard.guard';
import { loadAdminGuard } from './guards/load-admin.guard';
const routes: Routes = [

  { path: 'first', loadChildren: () => import('./first/first.module').then(m => m.FirstModule) },

  { path: 'second', loadChildren: () => import('./second/second.module').then(m => m.SecondModule) },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
