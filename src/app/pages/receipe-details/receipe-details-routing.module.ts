import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipeDetailsPage } from './receipe-details.page';

const routes: Routes = [
  {
    path: '',
    component: ReceipeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceipeDetailsPageRoutingModule {}
