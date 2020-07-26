import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';

import { SessionPage } from './session.page';
const routes: Routes = [
  {
    path: '',
    component: SessionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SessionPage]
})
export class SessionPageModule {}
