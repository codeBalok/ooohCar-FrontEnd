import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Subject } from 'rxjs';
import { SearchListModel, SearchSelectedModels, SearchSelectedVariants,SearchSelectedPrice,SearchSelectedOdometer,SearchSelectedTransmission, SearchSelectedYear } from '../shared/models/SearchListModel';
import { map } from 'rxjs/operators';
import { SearchModel,SearchSelectedMakes } from '../shared/models/SearchListModel';
@Injectable({
    providedIn: 'root'
  })




  export class sellusedcarService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    GetMakeList() {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetMakeListAddVehicle');
      }
      GetModelList(makeId: number) {
        return this.http.get<any>(this.baseUrl + 'AddVehicle/GetModelList/' + makeId);
      }
  }