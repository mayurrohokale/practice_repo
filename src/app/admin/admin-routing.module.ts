import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DemoComponent } from '../demo/demo.component';

const routes: Routes = [
  { path: 'admin', children: [
    {path: 'demo', component: DemoComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
