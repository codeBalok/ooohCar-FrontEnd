import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, DebugElement } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { cardetailService } from './car-detail.service';
import { ActivatedRoute } from '@angular/router';
import { CarDetailsModel } from '../shared/models/CarDetailsModels';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
 queryParamVechileId:string='';
 
 public vehicleDetail = new CarDetailsModel();
  constructor(private _cardetailService: cardetailService,private route: ActivatedRoute) { 
   
      this.queryParamVechileId = this.route.snapshot.params.id;
  }

  ngOnInit(): void { 
    this.getCarDetail(this.queryParamVechileId)
  }
  getCarDetail(id){
    this._cardetailService.GetVehicleDetail(id).subscribe((res)=>{
      this.vehicleDetail=res;
      console.log(this.vehicleDetail);
    }); 
  }
}
