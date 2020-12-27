import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideSearchComponent } from './side-search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SideSearchComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SideSearchComponent]
})
export class SideSearchModule { }


