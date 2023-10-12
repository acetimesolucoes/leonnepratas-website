import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B2bHomeComponent } from './b2b-home/b2b-home.component';
import { B2bCommonLayoutComponent } from './b2b-common-layout/b2b-common-layout.component';
import { B2bProductDetailComponent } from './b2b-product-detail/b2b-product-detail.component';
import { B2bPoliticasDePrivacidadeComponent } from './b2b-politicas-de-privacidade/b2b-politicas-de-privacidade.component';
import { B2bPoliticasDeGarantiaComponent } from './b2b-politicas-de-garantia/b2b-politicas-de-garantia.component';
import { B2bPoliticasDeTrocaComponent } from './b2b-politicas-de-troca/b2b-politicas-de-troca.component';
import { B2bPromocaoFreteGratisComponent } from './b2b-promocao-frete-gratis/b2b-promocao-frete-gratis.component';
import { B2bCategoryComponent } from './b2b-category/b2b-category.component';

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
        path: 'categorias/:param',
        component: B2bCategoryComponent,
      },
      {
        path: 'politica-de-privacidade',
        component: B2bPoliticasDePrivacidadeComponent,
      },
      {
        path: 'politica-de-garantia',
        component: B2bPoliticasDeGarantiaComponent,
      },
      {
        path: 'politica-de-troca',
        component: B2bPoliticasDeTrocaComponent,
      },
      {
        path: 'promocao-frete-gratis',
        component: B2bPromocaoFreteGratisComponent,
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
