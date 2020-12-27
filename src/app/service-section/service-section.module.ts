import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceSectionComponent } from './service-section.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ServiceSectionComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ServiceSectionComponent]
})
export class ServiceSectionModule { }
