import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { B2bCartRoutingModule } from './b2b-cart-routing.module';
import { B2bCartStartComponent } from './b2b-cart-start/b2b-cart-start.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { B2bModuleRoutingModule } from '../b2b-module-routing.module';
import { B2bCartLayoutComponent } from './b2b-cart-layout/b2b-cart-layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    B2bCartStartComponent,
    B2bCartLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    B2bCartRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class B2bCartModule { }
