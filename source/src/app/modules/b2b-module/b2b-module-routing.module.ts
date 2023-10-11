import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B2bHomeComponent } from './b2b-home/b2b-home.component';
import { B2bCommonLayoutComponent } from './b2b-common-layout/b2b-common-layout.component';
import { B2bProductDetailComponent } from './b2b-product-detail/b2b-product-detail.component';
import { B2bPoliticasDePrivacidadeComponent } from './b2b-politicas-de-privacidade/b2b-politicas-de-privacidade.component';
import { B2bPoliticasDeGarantiaComponent } from './b2b-politicas-de-garantia/b2b-politicas-de-garantia.component';
import { B2bPoliticasDeTrocaComponent } from './b2b-politicas-de-troca/b2b-politicas-de-troca.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: B2bCommonLayoutComponent,
    children: [
      {
        path: '',
        component: B2bHomeComponent,
      },
      {
        path: 'category/:param',
        component: B2bProductDetailComponent,
      },
      {
        path: 'politicas-de-privacidade',
        component: B2bPoliticasDePrivacidadeComponent,
      },
      {
        path: 'politicas-de-garantia',
        component: B2bPoliticasDeGarantiaComponent,
      },
      {
        path: 'politicas-de-troca',
        component: B2bPoliticasDeTrocaComponent,
      },
      {
        path: ':id',
        component: B2bProductDetailComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B2bModuleRoutingModule { }
