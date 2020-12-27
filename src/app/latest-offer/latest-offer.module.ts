import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestOfferComponent } from './latest-offer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LatestOfferComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [LatestOfferComponent]
})
export class LatestOfferModule { }
