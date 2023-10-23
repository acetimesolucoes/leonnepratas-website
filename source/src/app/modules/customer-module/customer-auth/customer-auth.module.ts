import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerAuthRoutingModule } from './customer-auth-routing.module';
import { CustomerSigninComponent } from './customer-signin/customer-signin.component';
import { CustomerAuthLayoutComponent } from './customer-auth-layout/customer-auth-layout.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerAuthLayoutComponent,
    CustomerSigninComponent,
    CustomerSignupComponent,
  ],
  imports: [
    CommonModule,
    CustomerAuthRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CustomerAuthModule { }
