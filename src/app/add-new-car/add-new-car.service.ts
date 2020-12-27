import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { addvehicleForm } from '../shared/models/AddNewCarModel';
import { CommonService } from '../Common/CommonService';
@Injectable({
  providedIn: 'root'
})
export class AddNewCarService {
    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient,public _commonService: CommonService) { }

    GetBodyTypeList() {
        return this.http.get<any>(this.baseUrl + 'Vehicle/GetBodyTypeList');
      }
      GetFualTypeList() {
        return this.http.get<any>(this.baseUrl + 'Vehicle/GetFualTypeList');
      }
      GetTransmissionList() {
        return this.http.get<any>(this.baseUrl + 'Vehicle/GetTransmissionList');
      }
      GetCylindersList() {
        return this.http.get<any>(this.baseUrl + 'Vehicle/GetCylindersList');
      }
      GetFualEconomyList() {
        return this.http.get<any>(this.baseUrl + 'Vehicle/GetFualEconomyList');
      }
      GetEngineSizeList() {
        return this.http.get<any>(this.baseUrl + 'Vehicle/GetEngineSizeList');
      }
     
      GetConditionList() {
        return this.http.get<any>(this.baseUrl + 'Vehicle/GetConditionList');
      }
      GetPriceList() {
        return this.http.get<any>(this.baseUrl + 'Vehicle/GetPriceList');
      }
     
      GetVarientList(modelId: number) {
        return this.http.get<any>(this.baseUrl + 'Vehicle/GetVariantList/' + modelId);
      }
      GetColorList() {
        return this.http.get<any>(this.baseUrl + 'Vehicle/GetColor');
      }
      AddUpdateNewVehicle(VehicleVM: addvehicleForm) {
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
        formData.append('VehicleImage', VehicleVM.VehicleImage);
      
        return this._commonService.postFormData(this.baseUrl + 'Vehicle/AddUpdateNewVehicle', formData)
      }

}
