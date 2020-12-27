import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureProductComponent } from './feature-product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FeatureProductComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FeatureProductComponent]
})
export class FeatureProductModule { }
