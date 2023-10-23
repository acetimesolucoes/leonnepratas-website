import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerCartStartComponent } from './customer-cart-start/customer-cart-start.component';
import { CustomerCartLayoutComponent } from './customer-cart-layout/customer-cart-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: CustomerCartLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'start',
        pathMatch: 'prefix',
      },
      {
        path: 'start',
        component: CustomerCartStartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerCartRoutingModule { }
