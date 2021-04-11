import { Injectable } from '@angular/core';  
import { HttpClient  } from '@angular/common/http';  
  
@Injectable({  
  providedIn: 'root'  
})  
export class LocationSerivceService  {  
  
  constructor(private http:HttpClient) { }  
  public getLocationByIp(ipaddress)  
  {  
    return this.http.get("http://ip-api.com/json/?fields="+ipaddress);  
  }  
}  