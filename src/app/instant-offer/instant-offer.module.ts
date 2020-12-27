import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstantOfferComponent } from './instant-offer.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [InstantOfferComponent],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  exports: [InstantOfferComponent]
})
export class InstantOfferModule { }
