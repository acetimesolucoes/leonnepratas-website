import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B2bHomeRoutingModule } from './b2b-home-routing.module';
import { B2bHomeComponent } from './b2b-home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    B2bHomeComponent,
  ],
  imports: [
    CommonModule,
    B2bHomeRoutingModule,
    SharedModule,
  ]
})
export class B2bHomeModule { }
