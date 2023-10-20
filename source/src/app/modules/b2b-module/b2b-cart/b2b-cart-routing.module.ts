import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { B2bCartStartComponent } from './b2b-cart-start/b2b-cart-start.component';
import { B2bCartLayoutComponent } from './b2b-cart-layout/b2b-cart-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: B2bCartLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'start',
        pathMatch: 'prefix',
      },
      {
        path: 'start',
        component: B2bCartStartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B2bCartRoutingModule { }
