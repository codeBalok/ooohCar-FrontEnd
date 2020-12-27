import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAdComponent } from './create-ad.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [CreateAdComponent],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  exports: [CreateAdComponent]
})
export class CreateAdModule { }
