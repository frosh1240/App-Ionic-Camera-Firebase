import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
          {
              path:'initial',
              children:[
                  {
                  path:'',
                  loadChildren: '../initial/initial.module#InitialPageModule'
                  }
              ]
          },
          { 
            path: 'music', 
            children:[
              {
                path:'',
                loadChildren:'../music/music.module#MusicPageModule'
              }
            ]  
          },
          { 
            path: 'video', 
            children:[
              {
                path:'',
                loadChildren: '../video/video.module#VideoPageModule' 
              }
            ]
          },
          { 
            path: 'manga', 
            children:[
              {
                path:'',
                loadChildren: '../manga/manga.module#MangaPageModule' 
              }
            ]
          },
          {
            path:'',
            redirectTo:'/tabs/initial',
            pathMatch:'full'
          }
      ]
  },
  {
      path: '',
      redirectTo: '/tabs/initial',
      pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
