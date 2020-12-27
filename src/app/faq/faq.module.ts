import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  exports: [FaqComponent]
})
export class FaqModule { }
