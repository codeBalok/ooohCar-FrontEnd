import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SearchListModel } from '../shared/models/SearchListModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeatureProductService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  GetListData() {
    return this.http.get<any>(this.baseUrl + 'FeatureProducts/GetListData');
  }
}
