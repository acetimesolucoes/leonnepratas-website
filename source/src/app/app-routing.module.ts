import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerModuleModule } from './modules/customer-module/customer-module.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadChildren: () => import('./modules/customer-module/customer-module-routing.module').then(mod => mod.CustomerModuleRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
