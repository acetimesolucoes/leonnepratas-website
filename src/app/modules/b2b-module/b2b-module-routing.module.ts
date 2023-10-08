import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B2bHomeComponent } from './b2b-home/b2b-home.component';
import { B2bCommonLayoutComponent } from './b2b-common-layout/b2b-common-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: B2bCommonLayoutComponent,
    children: [
      {
        path: '',
        component: B2bHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B2bModuleRoutingModule { }
