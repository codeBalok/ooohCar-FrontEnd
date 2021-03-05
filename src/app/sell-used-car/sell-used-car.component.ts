import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import {AddNewCarListModel} from '../shared/models/AddNewCarModel';
import { sellusedcarService } from './sell-used-car.service';
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
  constructor(private sellusedcarService: sellusedcarService) { }

  ngOnInit(): void {
    this.sellusedcarService.GetMakeList().subscribe((res)=>{
      this.AddNewCarListModel.MakeType = res; 
      
      console.log(this.AddNewCarListModel);
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
    this.sellusedcarService.GetModelList(id).subscribe((res)=>{
      this.AddNewCarListModel.CarModel = res;
    }); 
  }
  
}
