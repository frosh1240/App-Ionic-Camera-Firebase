import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular';

import { RegistryPage } from './registry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: RegistryPage }])
  ],
  declarations: [RegistryPage]
})
export class RegistryPageModule {}
