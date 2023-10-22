import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B2bDashboardRoutingModule } from './b2b-dashboard-routing.module';
import { B2bDashboardLayoutComponent } from './b2b-dashboard-layout/b2b-dashboard-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { B2bAccountComponent } from './b2b-account/b2b-account.component';


@NgModule({
  declarations: [
    B2bDashboardLayoutComponent,
    B2bAccountComponent
  ],
  imports: [
    CommonModule,
    B2bDashboardRoutingModule,
    SharedModule,
  ]
})
export class B2bDashboardModule { }
