import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WhistListModel } from '../shared/models/WishtlistModel';

@Injectable({
  providedIn: 'root'
})
export class CarSearchService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  addremovefavourite(WhistListModel:WhistListModel) {
    return this.http.post<any>(this.baseUrl + 'WhistList/AddFavourite', WhistListModel);
  }
}


