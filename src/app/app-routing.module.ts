import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'session',
    pathMatch:'full'
  },
  { 
    path: 'session', 
    loadChildren:() => import('./session/session.module').then(m => m.SessionPageModule)
  },
  { 
    path: 'registry', 
    loadChildren:() => import('./registry/registry.module').then(m => m.RegistryPageModule) 
  },
  { 
    path: 'home', 
    loadChildren: './home/home.module#HomePageModule' 
  },
  { path: '', 
  loadChildren: './tabs/tabs.module#TabsPageModule' 
  },
  { 
    path: 'camera', 
    loadChildren: './camera/camera.module#CameraPageModule'
  },
  { 
    path: 'music', 
    loadChildren: './music/music.module#MusicPageModule' 
  },
  { 
    path: 'video', 
    loadChildren: './video/video.module#VideoPageModule' 
  },
  { 
    path: 'manga', 
    loadChildren: './manga/manga.module#MangaPageModule' 
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'username',
    loadChildren: () => import('./username/username.module').then( m => m.UsernamePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
