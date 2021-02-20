import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import {AddNewCarListModel} from '../shared/models/AddNewCarModel';
@Component({
  selector: 'app-sell-used-car',
  templateUrl: './sell-used-car.component.html',
  styleUrls: ['./sell-used-car.component.scss']
})
export class SellUsedCarComponent implements OnInit {
  public AddNewCarListModel = new AddNewCarListModel();
  carmake:boolean=true;
  carmodel:boolean=false;
  carvarient:boolean=false;
  caryear:boolean=false;
  carregstate:boolean=false;
  carcode:boolean=false;
  carmodelbind:string="-1";
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.GetMakeList().subscribe((res)=>{
      this.AddNewCarListModel.MakeType = res;
     
    }); 
   
  }
  clickMake(MakeType){
    this.carmake=false;
    this.carmodel=true;
    this.carvarient=false;
    this.caryear=false;
    this.carregstate=false;
    this.carcode=false;
    this.getModelList(MakeType);
  }

  getModelList(id){
    this.homeService.GetModelList(id).subscribe((res)=>{
      this.AddNewCarListModel.CarModel = res;
    }); 
  }
  
}
