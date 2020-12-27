import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewCarComponent } from './add-new-car.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [AddNewCarComponent],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ],
 
  exports: [AddNewCarComponent]
})
export class AddNewCarModule { }
