import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SearchSelectedModels, SearchSelectedVariants,SearchSelectedPrice,SearchSelectedOdometer,SearchSelectedTransmission, SearchSelectedYear, SearchSelectedFuelType, SearchSelectedCylinder, SearchSelectedEngineSize, SearchSelectedEngineDescription,SearchSelectedFuelEconomy, SearchSelectedInductionTurbo, SearchSelectedPower, SearchSelectedTow, SearchSelectedPowerToWeight, SearchSelectedDriveType, SearchSelectedBodyType, SearchSelectedColour, SearchSelectedSeats, SearchSelectedDoors, SearchSelectedLifeStyles,SearchSelectedVehicleType, SearchSelectedCertifiedInspected } from '../shared/models/SearchListModel';
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
  GetPowerToWeightList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetPowerToWeightList');
  } 
  GetInductionTurboList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetInductionTurboList');
  } 
  GetDriveTypeList() {
    return this.http.get<any>(this.baseUrl + 'Home/GetDriveTypeList');
  } 
  GetVehicleListAccordingToSelectedInductionTurbo(searchSelectedInductionTurbo : SearchSelectedInductionTurbo)
  {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedInductionTurbo', searchSelectedInductionTurbo);
  }
  GetVehicleListAccordingToSelectedPower(searchSelectedPower : SearchSelectedPower)
  {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedPower', searchSelectedPower);
  }
  GetVehicleListAccordingToSelectedPowerToWeight(searchSelectedPowerToWeight : SearchSelectedPowerToWeight)
  {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedPowerToWeight', searchSelectedPowerToWeight);
  }
  GetVehicleListAccordingToSelectedTow(searchSelectedTow : SearchSelectedTow)
  {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedTow', searchSelectedTow);
  }
  GetVehicleListAccordingToSelectedDriveType(searchSelectedDriveType : SearchSelectedDriveType)
  {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedDriveType', searchSelectedDriveType);
  }
  GetVehicleListAccordingToSelectedBodyTypeRange(searchSelectedBodyType : SearchSelectedBodyType) {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedBodyType', searchSelectedBodyType);
  }
  GetVehicleListAccordingToSelectedColourRange(searchSelectedColour : SearchSelectedColour) {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedColour', searchSelectedColour);
  }
  GetPriceList(){
  return this.http.get<any>(this.baseUrl + 'Home/GetPriceList');
  }
  GetDoorsList(){
    return this.http.get<any>(this.baseUrl + 'Home/GetDoorsList');
  }
  GetSeatsList(){
   return this.http.get<any>(this.baseUrl + 'Home/GetSeatsList');
   }
  GetLifeStylesList(){
   return this.http.get<any>(this.baseUrl + 'Home/GetLifeStylesList');
  }
  GetVehicleListAccordingToSelectedSeatsRange(searchSelectedSeats : SearchSelectedSeats) {
    return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedSeat', searchSelectedSeats);
  }

  GetVehicleListAccordingToSelectedDoors(searchSelectedDoors : SearchSelectedDoors) {
      return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedDoors', searchSelectedDoors);
    } 
  
  GetVehicleListAccordingToSelectedLifeStyles(searchSelectedLifeStyles : SearchSelectedLifeStyles) {
      return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedLifeStyles', searchSelectedLifeStyles);
    }
  GetVehicleListAccordingToSelectedVehicleType(searchSelectedVehicleType : SearchSelectedVehicleType) {
      return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedVehicleType', searchSelectedVehicleType);
    }
  GetVehicleListAccordingToSelectedCertifiedInspected(searchSelectedCertifiedInspected : SearchSelectedCertifiedInspected) {
      return this.http.post<any>(this.baseUrl + 'Home/GetVehicleListAccordingToSelectedCertifiedInspected', searchSelectedCertifiedInspected);
    }

}