import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideSearchComponent } from './side-search.component';
import { SharedModule } from '../shared/shared.module';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from  './side-search.filter.pipe';
import { Ng5SliderModule } from 'ng5-slider';
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  declarations: [SideSearchComponent,FilterPipe],
  imports: [
    CommonModule,
    SharedModule,
    Ng5SliderModule,
    TreeviewModule.forRoot()
  ],
  exports: [SideSearchComponent]
})
export class SideSearchModule { }