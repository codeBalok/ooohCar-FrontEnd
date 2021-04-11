import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Subject } from 'rxjs';
import { addvehicleForm } from '../shared/models/AddNewCarModel';
import { SearchListModel, SearchSelectedModels, SearchSelectedVariants,SearchSelectedPrice,SearchSelectedOdometer,SearchSelectedTransmission, SearchSelectedYear } from '../shared/models/SearchListModel';
import { map } from 'rxjs/operators';
import { SearchModel,SearchSelectedMakes } from '../shared/models/SearchListModel';
import { CommonService } from '../Common/CommonService';
@Injectable({
    providedIn: 'root'
  })




  export class sellusedcarService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient,public _commonService: CommonService) { }

    GetMakeList() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetMakeListAddVehicle');
      }
      GetModelList(makeId: number) {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetModelList/' + makeId);
      }
      GetFualType() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetFuelTypesList');
      }
      GetVarientList(modelId: number) {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetVarientList/'+modelId);
      }
      GetYearList() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetYearList');
      }
      GetConditionList() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetConditionList');
      }
      GetPriceList() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetPriceList');
      }
      GetTrasmissionList() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetTrasmissionList');
      }
      GetCylindersList() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetCylindersList');
      }
      GetBodyTypeList() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetBodyTypeList');
      }
      GetColourList() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetColourList');
      }
      GetIpAddress() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetIpAddress');
      }
      GetLocationByIp(ip:string) {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetLocationByIp/'+ip);
      }
      GetEngineSizeList() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetEngineSizeList');
      }

      AddUpdateNewVehicle(VehicleVM: addvehicleForm) {
        console.log(VehicleVM);
        debugger;
        const formData = new FormData();
        formData.append('MakeId', VehicleVM.MakeId);
        formData.append('YearId', VehicleVM.YearId);
        formData.append('ModelId', VehicleVM.ModelId);
        formData.append('Variant', VehicleVM.Variant);
        formData.append('ConditionId', VehicleVM.ConditionId);
        formData.append('PriceId', VehicleVM.PriceId);
        formData.append('Kilometer', VehicleVM.Kilometer);
        formData.append('TransmissionId', VehicleVM.TransmissionId);
        formData.append('FuelTypeId', VehicleVM.FuelTypeId);
        formData.append('DriveTrain', VehicleVM.DriveTrain);
        formData.append('CylindersId', VehicleVM.CylindersId);
        formData.append('BodyTypeId', VehicleVM.BodyTypeId);
        formData.append('AirConditioning', VehicleVM.AirConditioning);
        formData.append('AuctionGrade', VehicleVM.AuctionGrade);
        formData.append('LocationId', VehicleVM.LocationId);
        formData.append('ColourId', VehicleVM.ColourId);
        // formData.append('VehicleImage', VehicleVM.VehicleImage);
        VehicleVM.VehicleImage.forEach((f) => formData.append('VehicleImage', f));
        formData.append('file', VehicleVM.VehicleImage);
        formData.append('Latitude', VehicleVM.lat);
        formData.append('Longitude', VehicleVM.long);
        formData.append('City', VehicleVM.city);
        formData.append('EngineSizeId', VehicleVM.enginesize);
        formData.append('Vin', VehicleVM.vin);
        formData.append('Odometers', VehicleVM.odometer);
        formData.append('RegistrationPlate', VehicleVM.regnumber);
        formData.append('Description', VehicleVM.description);
        formData.append('Contactprefrencedetail', VehicleVM.Contactprefrencedetail);
        formData.append('Contactprefrencedetail', VehicleVM.Contactprefrencedetail);
        debugger;
        return this._commonService.postFormData(this.baseUrl + 'AddVehicle/AddUpdateNewVehicle', formData)
      }
  }