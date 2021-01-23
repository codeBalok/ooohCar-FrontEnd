import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideSearchComponent } from './side-search.component';
import { SharedModule } from '../shared/shared.module';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from  './side-search.filter.pipe';

@NgModule({
  declarations: [SideSearchComponent,FilterPipe],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SideSearchComponent]
})
export class SideSearchModule { }