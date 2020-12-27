import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarSearchComponent } from './car-search.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { SideSearchModule } from '../side-search/side-search.module';

@NgModule({
  declarations: [CarSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    SideSearchModule
  ],
  exports: [CarSearchComponent]
})
export class CarSearchModule { }
