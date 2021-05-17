import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceipeDetailsPageRoutingModule } from './receipe-details-routing.module';

import { ReceipeDetailsPage } from './receipe-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceipeDetailsPageRoutingModule
  ],
  declarations: [ReceipeDetailsPage]
})
export class ReceipeDetailsPageModule {}
