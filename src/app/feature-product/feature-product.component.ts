import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { FeatureProductService } from './feature-product.service';
import { VehicleModel } from '../shared/models/VehicleModel';

@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.scss']
})
export class FeatureProductComponent implements OnInit {
public vehicleModelList: VehicleModel[] = [];
  constructor(private featureProductService : FeatureProductService) { }

  ngOnInit(): void {
    this.featureProductService.GetListData().subscribe((res)=>{
      this.vehicleModelList = res;
    });
  }
}
