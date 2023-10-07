import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B2bModuleModule } from './modules/b2b-module/b2b-module.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/b2b-module/b2b-home/b2b-home-routing.module').then(mod => mod.B2bHomeRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
