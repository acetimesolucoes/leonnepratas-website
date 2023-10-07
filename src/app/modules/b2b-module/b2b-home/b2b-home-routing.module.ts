import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { B2bHomeComponent } from './b2b-home.component';

const routes: Routes = [
  {
    path: '',
    component: B2bHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B2bHomeRoutingModule { }
