import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerAuthLayoutComponent } from './customer-auth-layout/customer-auth-layout.component';
import { CustomerSigninComponent } from './customer-signin/customer-signin.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: CustomerAuthLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'signin'
      },
      {
        path: 'signin',
        component: CustomerSigninComponent
      },
      {
        path: 'signup',
        component: CustomerSignupComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAuthRoutingModule { }
