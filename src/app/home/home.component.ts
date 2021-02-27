import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SearchListModel,SearchModel} from '../shared/models/SearchListModel';
import {CommonModel} from '../shared/models/commonModel';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public searchListModel = new SearchListModel();
  public searchModel = new SearchModel();
  @ViewChild('selectBrand', {static: false}) selectBrand: ElementRef;
  constructor(private homeService: HomeService,
    private route: ActivatedRoute,
    private router: Router) { }
  //$('.selectpicker').selectpicker();
  ngOnInit() {
    this.homeService.GetVehicleTypeList().subscribe((res)=>{
      this.searchListModel.CarType = res;
    });

    this.homeService.GetLocationList().subscribe((res)=>{
        this.searchListModel.Location = res;
    });

    this.homeService.GetMakeList().subscribe((res)=>{
      this.searchListModel.Make = res;
    });

    this.homeService.GetYearList().subscribe((res)=>{
      this.searchListModel.Year = res;
    });
  }

  getModelList(id){
    this.homeService.GetModelList(id).subscribe((res)=>{
      this.searchListModel.CarModel = res;
    });
  }

  searchCick(){
    this.router.navigate(['search'], { queryParams: { typeId: this.searchModel.CarTypeId,
      brandId : this.searchModel.MakeId, modelId : this.searchModel.CarModelId,
      location: this.searchModel.LocationId, year : this.searchModel.YearId } });

    //this.router.navigate(['/search']);
  }
}
