import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/app/shared/shared.module';
import { B2bModuleRoutingModule } from './b2b-module-routing.module';
import { B2bHomeComponent } from './b2b-home/b2b-home.component';
import { B2bCommonLayoutComponent } from './b2b-common-layout/b2b-common-layout.component';
import { B2bProductDetailComponent } from './b2b-product-detail/b2b-product-detail.component';


@NgModule({
  declarations: [
    B2bHomeComponent,
    B2bCommonLayoutComponent,
    B2bProductDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbModule,
    B2bModuleRoutingModule,
  ]
})
export class B2bModuleModule { }
