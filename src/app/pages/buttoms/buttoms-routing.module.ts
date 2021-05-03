import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtomsPage } from './buttoms.page';

const routes: Routes = [
  {
    path: '',
    component: ButtomsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtomsPageRoutingModule {}
