import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerModuleRoutingModule } from './customer-module-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerCommonLayoutComponent } from './customer-common-layout/customer-common-layout.component';
import { CustomerProductDetailComponent } from './customer-product-detail/customer-product-detail.component';
import { CustomerPoliticasDePrivacidadeComponent } from './customer-politicas-de-privacidade/customer-politicas-de-privacidade.component';
import { CustomerPoliticasDeGarantiaComponent } from './customer-politicas-de-garantia/customer-politicas-de-garantia.component';
import { CustomerPoliticasDeTrocaComponent } from './customer-politicas-de-troca/customer-politicas-de-troca.component';
import { CustomerPromocaoFreteGratisComponent } from './customer-promocao-frete-gratis/customer-promocao-frete-gratis.component';
import { CustomerCategoryComponent } from './customer-category/customer-category.component';

@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerCommonLayoutComponent,
    CustomerProductDetailComponent,
    CustomerPoliticasDePrivacidadeComponent,
    CustomerPoliticasDeGarantiaComponent,
    CustomerPoliticasDeTrocaComponent,
    CustomerPromocaoFreteGratisComponent,
    CustomerCategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgbModule,
    CustomerModuleRoutingModule,
  ]
})
export class CustomerModuleModule { }
