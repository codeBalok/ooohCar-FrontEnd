import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCarsComponent } from './new-cars.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewCarsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NewCarsComponent]
})
export class NewCarsModule { }
