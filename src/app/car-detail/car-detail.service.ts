import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonService } from '../Common/CommonService';
@Injectable({
    providedIn: 'root'
  })


  export class cardetailService {
    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient,public _commonService: CommonService) { }

    GetVehicleDetail(vehicleid: number) {
        return this.http.get<any>(this.baseUrl + 'VechileDetail/GetVehicleDetail/' + vehicleid);
      }
  }