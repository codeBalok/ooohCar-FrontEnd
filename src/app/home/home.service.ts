import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Subject } from 'rxjs';
import { SearchListModel, SearchSelectedModels, SearchSelectedVariants,SearchSelectedPrice,SearchSelectedOdometer,SearchSelectedTransmission, SearchSelectedYear, SearchSelectedFuelType, SearchSelectedCylinder, SearchSelectedEngineSize, SearchSelectedEngineDescription,SearchSelectedFuelEconomy } from '../shared/models/SearchListModel';
import { map } from 'rxjs/operators';
import { SearchModel,SearchSelectedMakes } from '../shared/models/SearchListModel';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  GetVehicleTypeList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetVehicleTypeList');
  }

  GetLocationList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetLocationList');
  }

  GetMakeList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetMakeList');
  }

  GetMakeListWithModalCount() {
    return this.http.get<any>(this.baseUrl + 'Home/SideSearchGetMakeList');
  }
  
  GetModelList(makeId: number) {
    return this.http.get<any>(this.baseUrl + 'Home/GetModelList/' + makeId);
  }
  GetModelListForSideSearch(makeId: number) {
    return this.http.get<any>(this.baseUrl + 'Home/GetModelListForSideSearch/' + makeId);
  }
  GetVariantListForSideSearch(modelId: number) {
    return this.http.get<any>(this.baseUrl + 'Home/GetVariantListForSideSearch/' + modelId);
  }

  GetYearList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetYearList');
  }

  GetSearchVehicleList(searchModel : SearchModel) {
    return this.http.post<any>(this.baseUrl + 'Home/GetSearchVehicleList', searchModel);
  }


  // AddUpdateSccessorChildren(Children: SuccessorGuardianChildren) {

  //   return this.http.post<any>(this.baseUrl + this.ApiRoute.AddUpdateChildren, Children);
  // }

  // //get Children by caseID
  // gatChildren(caseId: number) {

  //   return this.http.get<any>(this.baseUrl + this.ApiRoute.GetChildrenByCaseId + '/' + caseId);

  // }

  // DeleteChildren(id: number) {

  //   return this.http.delete<IResponse>(this.baseUrl + this.ApiRoute.DeleteChildren + '/' + id);
  // }
  GetVehicleListAccordingToSelectedMakes(searchSelectedMakes : SearchSelectedMakes) {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedMakes', searchSelectedMakes);
  }
  GetVehicleListAccordingToSelectedModels(searchSelectedModels : SearchSelectedModels) {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedModels', searchSelectedModels);
  }
  GetVehicleListAccordingToSelectedVariants(searchSelectedVariants : SearchSelectedVariants) {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedVariants', searchSelectedVariants);
  }
  GetloggedinUsersCountry()
  {
    return this.http.get<any>('https://extreme-ip-lookup.com/json/'); 
  }
  GetStatesbyCountry(country:string)
  {
    return this.http.get<any>('assets/states.json') ;    
  }
  GetVehicleListAccordingToSelectedPriceRange(searchSelectedPrice : SearchSelectedPrice) {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedPriceRange', searchSelectedPrice);
  }
  GetVehicleListAccordingToSelectedOdometerRange(searchSelectedOdometer : SearchSelectedOdometer) {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedOdometerRange', searchSelectedOdometer);
  }
  GetTransmissionList()
  {
    return this.http.get<any>(this.baseUrl +'Home/GetTransmissionList') ; 
  }
  GetVehicleListAccordingToSelectedTransmissionRange(searchSelectedTransmission : SearchSelectedTransmission) {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedTransmission', searchSelectedTransmission);
  }
  GetVehicleListAccordingToSelectedYearRange(searchSelectedYear : SearchSelectedYear) {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedYear', searchSelectedYear);
  }
  GetCertifiedInspectedList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetCertifiedInspectedList');
  }
  GetFuelTypeList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetFuelTypesList');
  }
  GetCylindersList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetCylindersList');
  }
  GetEngineSizeList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetEngineSizeList');
  }
  GetEngineDescriptionList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetEngineDescriptionList');
  }
  GetFuelEconomyList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetFuelEconomyList');
  }  
  GetBodyTypeList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetBodyTypeList');
  } 
  GetColourList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetColourList');
  } 
  GetVehicleListAccordingToSelectedFuelType(searchSelectedFuelType : SearchSelectedFuelType)
  {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToFuelType', searchSelectedFuelType);
  }
  GetVehicleListAccordingToCylinder(searchSelectedCylinder : SearchSelectedCylinder)
  {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToCylinder', searchSelectedCylinder);
  }
  GetVehicleListAccordingToSelectedEngineSize(searchSelectedEngineSize : SearchSelectedEngineSize)
  {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedEngineSize', searchSelectedEngineSize);
  }
  GetVehicleListAccordingToSelectedEngineDescription(searchSelectedEngineDescription : SearchSelectedEngineDescription)
  {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedEngineDescription', searchSelectedEngineDescription);
  }
  GetVehicleListAccordingToSelectedFuelEconomy(SearchSelectedFuelEconomy : SearchSelectedFuelEconomy)
  {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedFuelEconomy', SearchSelectedFuelEconomy);
  }
  GetTowList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetTowList');
  } 
  GetPowerList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetPowerList');
  } 
  GetPowerToWeightLis() {
    return this.http.get<any>(this.baseUrl + 'Home/GetPowerToWeightList');
  } 
  GetInductionTurboList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetInductionTurboList');
  } 
}