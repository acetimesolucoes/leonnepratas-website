import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { CustomerPurchasesComponent } from './customer-purchases/customer-purchases.component';
import { CustomerDashboardLayoutComponent } from './customer-dashboard-layout/customer-dashboard-layout.component';


@NgModule({
  declarations: [
    CustomerDashboardLayoutComponent,
    CustomerAccountComponent,
    CustomerPurchasesComponent
  ],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule,
    SharedModule,
  ]
})
export class CustomerDashboardModule { }
