import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardLayoutComponent } from './customer-dashboard-layout/customer-dashboard-layout.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { CustomerPurchasesComponent } from './customer-purchases/customer-purchases.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: CustomerDashboardLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'account'
      },
      {
        path: 'account',
        component: CustomerAccountComponent
      },
      {
        path: 'purchases',
        component: CustomerPurchasesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule { }
