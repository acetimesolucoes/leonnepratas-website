import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { B2bAuthLayoutComponent } from './b2b-auth-layout/b2b-auth-layout.component';
import { B2bSigninComponent } from './b2b-signin/b2b-signin.component';
import { B2bSignupComponent } from './b2b-signup/b2b-signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: B2bAuthLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'signin'
      },
      {
        path: 'signin',
        component: B2bSigninComponent
      },
      {
        path: 'signup',
        component: B2bSignupComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B2bAuthRoutingModule { }
