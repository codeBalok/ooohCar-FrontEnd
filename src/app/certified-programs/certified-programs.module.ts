import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertifiedProgramsComponent } from './certified-programs.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [CertifiedProgramsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  exports: [CertifiedProgramsComponent]
})
export class CertifiedProgramsModule { }
