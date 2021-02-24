import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideSearchComponent } from './side-search.component';
import { SharedModule } from '../shared/shared.module';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from  './side-search.filter.pipe';
import { Ng5SliderModule } from 'ng5-slider';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms' 

@NgModule({
  declarations: [SideSearchComponent,FilterPipe],
  imports: [
    CommonModule,
    SharedModule,
    Ng5SliderModule,
    AutocompleteLibModule,
    MatAutocompleteModule,
    ReactiveFormsModule
    
  ],
  exports: [SideSearchComponent]
})
export class SideSearchModule { }