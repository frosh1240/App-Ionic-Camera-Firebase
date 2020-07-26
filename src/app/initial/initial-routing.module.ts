import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPage } from './initial.page';

const routes: Routes = [
  {
    path: 'initial',
    component: InitialPage,
    children: [
      {
        path: 'home',
        outlet: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/initial/(home:home)',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialPageRoutingModule {}
