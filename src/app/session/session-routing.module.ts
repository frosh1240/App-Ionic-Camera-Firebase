import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionPage } from './session.page';

const routes: Routes = [
    {
      path: 'session',
      component: SessionPage,
      children:[
        {
          path:'registry',
          children:[
            {
              path:'',
              loadChildren: () => import('../registry/registry.module').then(m => m.RegistryPageModule)
            }
          ]
        }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionPageRoutingModule{}