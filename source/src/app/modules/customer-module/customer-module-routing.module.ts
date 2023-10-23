import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerCommonLayoutComponent } from './customer-common-layout/customer-common-layout.component';
import { CustomerProductDetailComponent } from './customer-product-detail/customer-product-detail.component';
import { CustomerPoliticasDePrivacidadeComponent } from './customer-politicas-de-privacidade/customer-politicas-de-privacidade.component';
import { CustomerPoliticasDeGarantiaComponent } from './customer-politicas-de-garantia/customer-politicas-de-garantia.component';
import { CustomerPoliticasDeTrocaComponent } from './customer-politicas-de-troca/customer-politicas-de-troca.component';
import { CustomerPromocaoFreteGratisComponent } from './customer-promocao-frete-gratis/customer-promocao-frete-gratis.component';
import { CustomerCategoryComponent } from './customer-category/customer-category.component';

const routes: Routes = [
  {
    path: 'auth',
    pathMatch: 'prefix',
    loadChildren: () => import('./customer-auth/customer-auth.module').then(m => m.CustomerAuthModule)
  },
  {
    path: 'dashboard',
    pathMatch: 'prefix',
    loadChildren: () => import('./customer-dashboard/customer-dashboard.module').then(m => m.CustomerDashboardModule)
  },
  {
    path: 'checkout',
    pathMatch: 'prefix',
    loadChildren: () => import('./customer-cart/customer-cart.module').then(m => m.CustomerCartModule)
  },
  {
    path: '',
    pathMatch: 'prefix',
    component: CustomerCommonLayoutComponent,
    children: [
      {
        path: '',
        component: CustomerHomeComponent,
      },
      {
        path: 'categorias/:param',
        component: CustomerCategoryComponent,
      },
      {
        path: 'politica-de-privacidade',
        component: CustomerPoliticasDePrivacidadeComponent,
      },
      {
        path: 'politica-de-garantia',
        component: CustomerPoliticasDeGarantiaComponent,
      },
      {
        path: 'politica-de-troca',
        component: CustomerPoliticasDeTrocaComponent,
      },
      {
        path: 'promocao-frete-gratis',
        component: CustomerPromocaoFreteGratisComponent,
      },
      {
        path: ':id',
        component: CustomerProductDetailComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerModuleRoutingModule { }
