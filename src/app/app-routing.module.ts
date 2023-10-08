import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B2bModuleModule } from './modules/b2b-module/b2b-module.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/b2b-module/b2b-module-routing.module').then(mod => mod.B2bModuleRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
