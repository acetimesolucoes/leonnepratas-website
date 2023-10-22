import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B2bDashboardLayoutComponent } from './b2b-dashboard-layout/b2b-dashboard-layout.component';
import { B2bAccountComponent } from './b2b-account/b2b-account.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: B2bDashboardLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'account'
      },
      {
        path: 'account',
        component: B2bAccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B2bDashboardRoutingModule { }
