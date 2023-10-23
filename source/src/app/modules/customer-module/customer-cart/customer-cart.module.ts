import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomerCartRoutingModule } from './customer-cart-routing.module';
import { CustomerCartStartComponent } from './customer-cart-start/customer-cart-start.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerModuleRoutingModule } from '../customer-module-routing.module';
import { CustomerCartLayoutComponent } from './customer-cart-layout/customer-cart-layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerCartStartComponent,
    CustomerCartLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CustomerCartRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class CustomerCartModule { }
