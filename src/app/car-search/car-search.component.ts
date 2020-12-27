import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchModel } from '../shared/models/SearchListModel';
import { HomeService } from '../home/home.service';
import { VehicleModel } from '../shared/models/VehicleModel';


@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {

  public searchModel = new SearchModel();
  public vehicleModel : VehicleModel[] = [];
  public isData : boolean = false;
  constructor(private homeService: HomeService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.searchModel.CarTypeId = params['typeId'] || 0;
      this.searchModel.MakeId = params['brandId'] || 0;
      this.searchModel.CarModelId = params['modelId'] || 0,
      this.searchModel.LocationId = params['location'] || 0,
      this.searchModel.YearId = params['year'] || 0,
      // alert(this.searchModel.CarTypeId + "---" + 
      // this.searchModel.MakeId + "---" + this.searchModel.CarModelId + "---" +
      // this.searchModel.LocationId + "---" + this.searchModel.YearId);

      this.homeService.GetSearchVehicleList(this.searchModel).subscribe((res)=>{
        console.log("vehicle" + res);
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });  
    });
  }

}
