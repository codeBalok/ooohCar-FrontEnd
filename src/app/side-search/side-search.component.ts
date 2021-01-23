import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {HomeService} from '../home/home.service'
import {SideSearchListModel,SideSearchModel} from '../shared/models/SideSearchModel';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from  './side-search.filter.pipe';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SearchSelectedMakes } from '../shared/models/SearchListModel';
import { VehicleModel } from '../shared/models/VehicleModel';
import { CommonModel } from '../shared/models/commonModel';
 
 

  
@Component({
  selector: 'app-side-search',
  templateUrl: './side-search.component.html',
  styleUrls: ['./side-search.component.scss']
})
export class SideSearchComponent implements OnInit {
  public SideSearchListModel = new SideSearchListModel();
 // public searchModel = new SearchModel();
  public IsExpandMake : string = '';
  public modelClickedName:string='';
  public IsModelSelected:boolean=false;
  public IsVarientEnable:boolean=false;
  public searchText: string = "";
  public selected_count: number = 0;
  public arrMake = [];   
  public selected_Makes  = [];
  public sideSearchMakeSelected  = [];
  closeResult: string;
  public searchSelectedMakes = new SearchSelectedMakes();
  public vehicleModel : VehicleModel[] = [];
  public SideSearchMakeSelected:false;
  @Output() selectedMakesEmit = new EventEmitter<string>();  
  constructor(private homeService: HomeService,private modalService: NgbModal,private router: Router) {     
  }

  ngOnInit(): void {       
    this.homeService.GetMakeListWithModalCount().subscribe((res)=>{ 
      this.SideSearchListModel.Make = res;     
      console.log(this.SideSearchListModel.Make);
      
      //move Make model data  into array// 
      for(let key in this.SideSearchListModel.Make)
      {  
        if(this.SideSearchListModel.Make.hasOwnProperty(key))
        {  
        this.arrMake.push(this.SideSearchListModel.Make[key]);    
        }        
      } 
    });    
  }
 

  SearchMake(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log('result is '+result);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log('result'+this.getDismissReason(reason));
      
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ExpandMake(){ 
    const element = document.querySelector("#expand-make");
    const isOpen=element.classList.contains("view-mode-open");
    if(isOpen)
    {
      this.IsExpandMake='';
    }
    else{
   this.IsExpandMake='view-mode-open';
    }
  }
  showModelsById(id,name){
    this.homeService.GetModelListForSideSearch(id).subscribe((res)=>{ 
      this.SideSearchListModel.CarModel = res;
      console.log(this.SideSearchListModel.CarModel);
      this.modelClickedName=name;
      this.IsModelSelected=true;
      this.IsVarientEnable=false;
    });   
  }
  showVariantById(id){
    this.homeService.GetVariantListForSideSearch(id).subscribe((res)=>{ 
      this.SideSearchListModel.Variant = res;  
      this.IsVarientEnable=true;
      this.IsModelSelected=false;
    });   
  }
  ClearModel(){
    this.modelClickedName='';
    this.IsModelSelected=false;

    // clear all the selected checkbox 
    this.arrMake = this.arrMake.filter(mk => {
      mk.Selected = false;
      return true;
    });
    this.SideSearchListModel.Make=JSON.parse(JSON.stringify(this.arrMake));
    this.clearSelection();
    this.selectedMakesEmit.emit(JSON.stringify(this.selected_Makes));
    
  }

  clearFilter() {
    this.searchText = "";
  }
  // Clearing All Selections in Modal
  clearSelection() {     
    this.searchText = "";
    this.arrMake = this.arrMake.filter(mk => {
      mk.Selected = false;
      return true;
    });
    this.getSelectedMakeId();    
  }

   
  // Getting Selected Makes and Count
  getSelectedMakeId() {
    //alert(JSON.stringify(this.arrMake));
    this.selected_Makes = this.arrMake.filter(selmak => {
      return selmak.Selected;      
    });     
    //this.selected_count = this.selected_Makes.length;
    //alert(this.selected_count);      
  }
 

  searchbuttonClick()
  {          
    this.modalService.dismissAll(this.selected_Makes);    
    this.selectedMakesEmit.emit(JSON.stringify(this.selected_Makes));
    this.selected_Makes.length>0? this.IsExpandMake='view-mode-open':this.IsExpandMake='';

    // Reset  the SideSearchListModel with selected Makes  
    if(this.selected_Makes.length>0)
    {
     //this.selected_Makes = this.arrMake.filter(selmak =>selmak.IsChecked=true);        
     let SelectedMake  = this.arrMake.filter(x => this.selected_Makes.includes(x));     // get selected makes only and filter it from original array    
     this.SideSearchListModel.Make=JSON.parse(JSON.stringify(SelectedMake));          // assigned back to SideSearchListModel and display
    }
    else
    {
       this.SideSearchListModel.Make=JSON.parse(JSON.stringify(this.arrMake));
    }  

  }

  BindVehicleListBySideSearchMakeId(e)
  {   
     var id:number=+e.target.value;  // get the value i.e.ID  of checked checkbox
     let  objIndex = this.arrMake.findIndex(x => x.id==id);  // select the checkec Make from an array 
     e.target.checked?this.arrMake[objIndex].Selected=true:this.arrMake[objIndex].Selected=false;   //set the Selected=true or Selected=false if unchecked 
        this.sideSearchMakeSelected=this.arrMake.filter(x=>x.Selected==true); // filter selected= true and bind to array
        this.selected_Makes=this.sideSearchMakeSelected;                      // bind it to selected_Makes which will be used into Modal popup
        this.selectedMakesEmit.emit(JSON.stringify(this.sideSearchMakeSelected)); // emit to bind carSearch details 
   }
  
  
}
