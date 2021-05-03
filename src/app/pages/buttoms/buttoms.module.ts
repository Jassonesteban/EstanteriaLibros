import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtomsPageRoutingModule } from './buttoms-routing.module';

import { ButtomsPage } from './buttoms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtomsPageRoutingModule
  ],
  declarations: [ButtomsPage]
})
export class ButtomsPageModule {}
