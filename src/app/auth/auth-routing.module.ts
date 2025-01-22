import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPagComponent } from './pages/register-pag/register-pag.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        component: RegisterPagComponent
      },
      {
        path: '**',
        redirectTo: 'sign-up'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
