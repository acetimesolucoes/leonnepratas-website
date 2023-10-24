import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerDashboardLayoutComponent } from './customer-dashboard-layout/customer-dashboard-layout.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { CustomerPurchasesComponent } from './customer-purchases/customer-purchases.component';
import { customerAuthGuard } from 'src/app/guards/customer-auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: CustomerDashboardLayoutComponent,
    canActivate: [customerAuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'account'
      },
      {
        path: 'account',
        component: CustomerAccountComponent,
        data: { title: 'Dashboard - Conta' }
      },
      {
        path: 'purchases',
        component: CustomerPurchasesComponent,
        data: { title: 'Dashboard - Pedidos' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule { }
