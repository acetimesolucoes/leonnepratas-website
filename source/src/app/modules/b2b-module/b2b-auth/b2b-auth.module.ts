import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B2bAuthRoutingModule } from './b2b-auth-routing.module';
import { B2bSigninComponent } from './b2b-signin/b2b-signin.component';
import { B2bAuthLayoutComponent } from './b2b-auth-layout/b2b-auth-layout.component';
import { B2bSignupComponent } from './b2b-signup/b2b-signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    B2bAuthLayoutComponent,
    B2bSigninComponent,
    B2bSignupComponent,
  ],
  imports: [
    CommonModule,
    B2bAuthRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class B2bAuthModule { }
