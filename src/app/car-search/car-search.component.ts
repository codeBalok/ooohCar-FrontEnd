import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchModel,SearchSelectedMakes, SearchSelectedModels,SearchSelectedVariants,SearchSelectedPrice,SearchSelectedOdometer,SearchSelectedTransmission, SearchSelectedYear,SearchSelectedFuelType, SearchSelectedCylinder, SearchSelectedEngineSize, SearchSelectedEngineDescription, SearchSelectedFuelEconomy, SearchSelectedInductionTurbo, SearchSelectedPower, SearchSelectedPowerToWeight, SearchSelectedTow, SearchSelectedDriveType} from '../shared/models/SearchListModel';
import { HomeService } from '../home/home.service';
import { VehicleModel } from '../shared/models/VehicleModel';
import { WhistListModel } from '../shared/models/WishtlistModel';
import { CarSearchService } from './car-search.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {
  public searchModel = new SearchModel();
  public vehicleModel : VehicleModel[] = [];
  public isData : boolean = false;
  public SearchSelectedMakes = new SearchSelectedMakes();
  public SearchSelectedModels = new SearchSelectedModels();
  public SearchSelectedVariants = new SearchSelectedVariants();
  public SearchSelectedPrice = new SearchSelectedPrice();
  public SearchSelectedOdometer= new SearchSelectedOdometer();
  public SearchSelectedYear= new SearchSelectedYear();
  public SearchSelectedEngineSize= new SearchSelectedEngineSize();
  public SearchSelectedEngineDescription= new SearchSelectedEngineDescription();
  public SearchSelectedFuelEconomy= new SearchSelectedFuelEconomy();
  public SearchSelectedTransmission=new SearchSelectedTransmission();
  public SearchSelectedFuelType= new SearchSelectedFuelType();
  public SearchSelectedCylinder = new SearchSelectedCylinder();
  public SearchSelectedInductionTurbo= new SearchSelectedInductionTurbo();
  public SearchSelectedPower= new SearchSelectedPower();
  public SearchSelectedPowerToWeight= new SearchSelectedPowerToWeight();
  public SearchSelectedTow= new SearchSelectedTow();
  public SearchSelectedDriveType= new SearchSelectedDriveType();
  public WhistListModels = new WhistListModel();
  constructor(private homeService: HomeService, private route: ActivatedRoute,
    private router: Router, private carService: CarSearchService,
    private toastr: ToastrService) { }
  display = 'none';
  vehicleImagevar = '';
  vehicleName = '';
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

          this.getSearchVehicleList(this.searchModel);


      });
  }

  // getSearchVehicleList(searchModel: SearchModel) {
  //   var UserItem = localStorage.getItem('user');
  //   var JsonuserItem = JSON.parse(UserItem);
  //   this.searchModel.UserId=JsonuserItem.userId

  //   this.homeService.GetSearchVehicleList(this.searchModel).subscribe((res) => {
  //     console.log("vehicle" + res);
  //     if (res.length > 0) {
  //       this.vehicleModel = res;
  //       this.isData = false;
  //     }
  //     else {
  //       this.isData = true;
  //     }
  //   });
  // }


  getSearchVehicleList(searchModel:SearchModel){
  this.homeService.GetSearchVehicleList(this.searchModel).subscribe((res)=>{
    if (res.length > 0){
      this.vehicleModel = res;
      this.isData = false;
    }
    else {
      this.isData = true;
    }});
  }
  getSelectedmakes(selected_Makes:string)
  {
      //console.log('from car serch-'+selected_Makes);
      this.SearchSelectedMakes.Make=JSON.parse(selected_Makes);
      if(this.SearchSelectedMakes.Make.length>0){
      this.homeService.GetVehicleListAccordingToSelectedMakes(this.SearchSelectedMakes).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId = "0";
      this.searchModel.LocationId = "0";
      this.searchModel.YearId = "0";
      this.getSearchVehicleList(this.searchModel);
    }

  }



  getSelectedmodels(selected_Models:string)
  {
      //console.log('from car serch-'+selected_Makes);
      this.SearchSelectedModels.Model=JSON.parse(selected_Models);
      if(this.SearchSelectedModels.Model.length>0){
      this.homeService.GetVehicleListAccordingToSelectedModels(this.SearchSelectedModels).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }


  getSelectedvariant(selected_Variant:string)
  {
      //console.log('from car serch-'+selected_Makes);
      this.SearchSelectedVariants.Variant=JSON.parse(selected_Variant);
      if(this.SearchSelectedVariants.Variant.length>0){
      this.homeService.GetVehicleListAccordingToSelectedVariants(this.SearchSelectedVariants).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }
  }

  getSelectedPrice(selected_Prices:string){
    this.SearchSelectedPrice.Price=JSON.parse(selected_Prices);
      if(this.SearchSelectedPrice.Price.length>0){
      this.homeService.GetVehicleListAccordingToSelectedPriceRange(this.SearchSelectedPrice).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }

  getSelectedOdometer(selected_Odometer:string){
    this.SearchSelectedOdometer.Odometer=JSON.parse(selected_Odometer);
      if(this.SearchSelectedOdometer.Odometer.length>0){
      this.homeService.GetVehicleListAccordingToSelectedOdometerRange(this.SearchSelectedOdometer).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }

  getSelectedTransmission(selected_Transmission:string){
    this.SearchSelectedTransmission.Transmission=JSON.parse(selected_Transmission);
      if(this.SearchSelectedTransmission.Transmission.length>0){
      this.homeService.GetVehicleListAccordingToSelectedTransmissionRange(this.SearchSelectedTransmission).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }

  openModalDialog(vehicleImage, vehicleName) {
    this.vehicleImagevar = vehicleImage;
    this.vehicleName = vehicleName;
    this.display = 'block';
  }
  closeModalDialog() {
    this.display = 'none';
  }

  addeleteFavourite(vehicleId, element) {
    debugger;
    var classExist = document.getElementById(element);
    var ClasExistInElement = classExist.classList.contains('active');
    this.WhistListModels.VehicleId = vehicleId;

    this.WhistListModels.Id = 0;
    var UserItem = localStorage.getItem('user');
    var JsonuserItem = JSON.parse(UserItem);
    this.WhistListModels.UserId = JsonuserItem.userId;
    if (ClasExistInElement) {
      classExist.classList.remove('active');
      this.WhistListModels.IsFavourite = classExist.classList.contains('active');
    }
    else {
      classExist.classList.add('active');
      this.WhistListModels.IsFavourite = classExist.classList.contains('active');
    }
    this.carService.addremovefavourite(this.WhistListModels).subscribe(() => {
      debugger;
      if (ClasExistInElement) {
        this.toastr.success('Car has been added to wishlist list');
      }
      else {
        this.toastr.success('Car has been removed from wishlist list');
      }
    }, error => {
      this.toastr.error(error.message);
      console.log(error);
    });
  }

  getSelectedYear(selected_Year:string){
    this.SearchSelectedYear.Year=JSON.parse(selected_Year);
      if(this.SearchSelectedYear.Year.length>0){
      this.homeService.GetVehicleListAccordingToSelectedYearRange(this.SearchSelectedYear).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }

  getSelectedFuelType(selected_FuelType:string){
    this.SearchSelectedFuelType.FuelType=JSON.parse(selected_FuelType);
      if(this.SearchSelectedFuelType.FuelType.length>0){
      this.homeService.GetVehicleListAccordingToSelectedFuelType(this.SearchSelectedFuelType).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }
   
  getSelectedCylinder(selected_Cylinders:string){
    this.SearchSelectedCylinder.Cylinder=JSON.parse(selected_Cylinders);
      if(this.SearchSelectedCylinder.Cylinder.length>0){
      this.homeService.GetVehicleListAccordingToCylinder(this.SearchSelectedCylinder).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }

  getSelectedEngineSize(selected_EngineSize:string){
    this.SearchSelectedEngineSize.EngineSize=JSON.parse(selected_EngineSize);
      if(this.SearchSelectedEngineSize.EngineSize.length>0)
      {
      this.homeService.GetVehicleListAccordingToSelectedEngineSize(this.SearchSelectedEngineSize).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }
  getSelectedEngineDescription(selected_EngineDescription:string){
    this.SearchSelectedEngineDescription.EngineDescription=JSON.parse(selected_EngineDescription);
      if(this.SearchSelectedEngineDescription.EngineDescription!=null || this.SearchSelectedEngineDescription.EngineDescription!=undefined)
      {
      this.homeService.GetVehicleListAccordingToSelectedEngineDescription(this.SearchSelectedEngineDescription).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }

  getSelectedFuelEconomy(selected_FuelEconomy:string){
    this.SearchSelectedFuelEconomy.FuelEconomy=JSON.parse(selected_FuelEconomy);
      if(this.SearchSelectedFuelEconomy.FuelEconomy!=null || this.SearchSelectedFuelEconomy.FuelEconomy!=undefined)
      {
      this.homeService.GetVehicleListAccordingToSelectedFuelEconomy(this.SearchSelectedFuelEconomy).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }

  getSelectedInductionTurbo(selected_InductionTurbo:string){
    this.SearchSelectedInductionTurbo.InductionTurbo=JSON.parse(selected_InductionTurbo);
      if(this.SearchSelectedInductionTurbo.InductionTurbo!=null || this.SearchSelectedInductionTurbo.InductionTurbo!=undefined)
      {
      this.homeService.GetVehicleListAccordingToSelectedInductionTurbo(this.SearchSelectedInductionTurbo).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }

  getSelectedPower(selected_Power:string){
    this.SearchSelectedPower.Power=JSON.parse(selected_Power);
      if(this.SearchSelectedPower.Power!=null || this.SearchSelectedPower.Power!=undefined)
      {
      this.homeService.GetVehicleListAccordingToSelectedPower(this.SearchSelectedPower).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }
  }

  
  getSelectedPowerToWeight(selected_PowerToWeight:string){
    this.SearchSelectedPowerToWeight.PowerToWeight=JSON.parse(selected_PowerToWeight);
      if(this.SearchSelectedPowerToWeight.PowerToWeight!=null || this.SearchSelectedPowerToWeight.PowerToWeight!=undefined)
      {
      this.homeService.GetVehicleListAccordingToSelectedPowerToWeight(this.SearchSelectedPowerToWeight).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }
  }

  getSelectedTow(selected_Tow:string){
    this.SearchSelectedTow.Tow=JSON.parse(selected_Tow);
      if(this.SearchSelectedTow.Tow!=null || this.SearchSelectedTow.Tow!=undefined)
      {
      this.homeService.GetVehicleListAccordingToSelectedTow(this.SearchSelectedTow).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }
  }

  
  getSelectedDriveType(selected_DriveType:string){
    this.SearchSelectedDriveType.DriveType=JSON.parse(selected_DriveType);
      if(this.SearchSelectedDriveType.DriveType!=null || this.SearchSelectedDriveType.DriveType!=undefined)
      {
      this.homeService.GetVehicleListAccordingToSelectedDriveType(this.SearchSelectedDriveType).subscribe((res)=>{
        if (res.length > 0){
          this.vehicleModel = res;
          this.isData = false;
        }
        else {
          this.isData = true;
        }
      });
    }
    else // empty array then bind all data of VehicleList
    {
      this.searchModel.CarTypeId = "0";
      this.searchModel.MakeId = "0";
      this.searchModel.CarModelId ="0";
      this.searchModel.LocationId ="0";
      this.searchModel.YearId ="0";
      this.getSearchVehicleList(this.searchModel);
    }

  }
}
