import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B2bModuleRoutingModule } from './b2b-module-routing.module';
import { B2bHomeComponent } from './b2b-home/b2b-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { B2bCommonLayoutComponent } from './b2b-common-layout/b2b-common-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    B2bHomeComponent,
    B2bCommonLayoutComponent,
  ],
  imports: [
    CommonModule,
    B2bModuleRoutingModule,
    SharedModule,
    RouterModule,
  ]
})
export class B2bModuleModule { }
