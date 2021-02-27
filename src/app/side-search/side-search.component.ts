import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {HomeService} from '../home/home.service'
import {SideSearchListModel,SideSearchModel} from '../shared/models/SideSearchModel';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from  './side-search.filter.pipe';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SearchSelectedMakes } from '../shared/models/SearchListModel';
import { VehicleModel } from '../shared/models/VehicleModel';
import { Options, LabelType } from 'ng5-slider';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';

export interface IYear{
  Id:number;
  Name:string;
}
 
  
@Component({
  selector: 'app-side-search',
  templateUrl: './side-search.component.html',
  styleUrls: ['./side-search.component.scss']
})
export class SideSearchComponent implements OnInit {
  public SideSearchListModel = new SideSearchListModel();
  public SideSearchTransmission = new SideSearchListModel();
  public SideSearchYear= new SideSearchListModel();
  public SideSearchCertifiedInspected= new SideSearchListModel();
  public SideSearchVehicleType= new SideSearchListModel();
  public IsExpandMake : string = '';
  public IsExpandLocation : string = '';
  public IsExpandPrice: string = '';
  public IsExpandOdometer: string = '';
  public IsExpandTransmission:string='';
  public IsExpandYear:string='';
  public IsExpandcertifiedinspected:string='';
  public IsExpandVehicleType:string='';
  public IsExpandKeywords:string='';
  public makeClickedName:string='';
  public modelClickedName:string='';
  public IsModelSelected:boolean=false;
  public IsVariantSelected:boolean=false;
  public IsVarientEnable:boolean=false;
  public searchText: string = "";
   Keyword='name';
  public selected_count: number = 0;
  public arrMake = [];   
  public arrModel= []; 
  public arrVariant= []; 
  public arrTransmission=[];
  public arrYear=[];
  public arrCertified=[];
  public arrVehicleType=[];
  public selected_Makes  = [];
  public selected_Models  = [];
  public selected_Variant  = [];
  public sideSearchMakeSelected  = [];
  public sideSearchModelSelected  = [];
  public sideSearchVariantSelected  = [];
  public sideSearchTransmissionSelected  = [];
  public sideSearchYearSelected  = [];  
  public SideSearchTransmissionSelected:false;
  closeResult: string;
  public searchSelectedMakes = new SearchSelectedMakes();
  public vehicleModel : VehicleModel[] = [];
  public SideSearchMakeSelected:false;
  startPage : number;
  paginationLimit:number; 
  variantstartPage : number;
  variantpaginationLimit:number; 
  locationstartPage:number;
  locationpaginationLimit:number; 
  @Output() selectedMakesEmit = new EventEmitter<string>();  
  @Output() selectedModelEmit= new EventEmitter<string>(); 
  @Output() selectedVariantEmit= new EventEmitter<string>(); 
  @Output() selectedPriceEmit= new EventEmitter<string>();
  @Output() selectedOdometerEmit= new EventEmitter<string>();
  @Output() selectedTransmissionEmit= new EventEmitter<string>();
  @Output() selectedYearEmit= new EventEmitter<string>();
  states: any = [];
  sliderPrices:number [] =[];
  sliderOdometer:number [] =[];
  loogedInUsersStates: any = [];
  fromPrice: number ;
  toPrice: number ;
  fromOdometer:number;
  selectedfromYear=this.SideSearchYear.Year ;
  selectedtoYear=this.SideSearchYear.Year ;
  toOdometer:number;
  minValue: number = 100;
  maxValue: number = 100000;
  priceoptions: Options = {
    floor: 0,
    ceil: 100000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
         // return '<b>Min price:</b>AU $' + value;
         return '<span class="expand-link">AU $</span>' + value;
        case LabelType.High:
          return '<span class="expand-link">AU $</span>' + value;
        default:
          return '<span class="expand-link">AU $</span>' + value;
      }
    }
  };
  public IsExpandEngine:string='';
  public IsExpandDriveType:string='';
  public IsExpandFuelType:string='';
  public IsExpandFuelEconomy:string='';
  public IsExpandEngineDescription:string='';
  public IsExpandEngineSize:string='';
  public IsExpandCylinders:string='';

  FromYrControl = new FormControl();    
  ToYrControl = new FormControl();    
  fromYearfilteredOptions: Observable<any[]>;
  toYearfilteredOptions: Observable<any[]>;
  

 


  constructor(private homeService: HomeService,private modalService: NgbModal,private router: Router) {
    this.startPage = 0;
    this.paginationLimit = 3;
    this.variantstartPage = 0;
    this.variantpaginationLimit = 3;
    this.locationstartPage = 0;
    this.locationpaginationLimit = 3;      
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
    
    this.homeService.GetTransmissionList().subscribe((res)=>{ 
      this.SideSearchTransmission.Transmission = res;     
      console.log(this.SideSearchTransmission.Transmission);
      
      //move Transmission model data  into array// 
      for(let key in this.SideSearchTransmission.Transmission)
      {  
        if(this.SideSearchTransmission.Transmission.hasOwnProperty(key))
        {  
        this.arrTransmission.push(this.SideSearchTransmission.Transmission[key]);    
        }        
      } 
    });

     this.homeService.GetCertifiedInspectedList().subscribe((res)=>{ 
      this.SideSearchCertifiedInspected.CertifiedInspected = res;     
      console.log(this.SideSearchCertifiedInspected.CertifiedInspected);
      //move CertifiedInspected model data  into array// 
      for(let key in this.SideSearchCertifiedInspected.CertifiedInspected)
      {  
        if(this.SideSearchCertifiedInspected.CertifiedInspected.hasOwnProperty(key))
        {  
        this.arrCertified.push(this.SideSearchCertifiedInspected.CertifiedInspected[key]);    
        }        
      } 
    });


    
    
    

    this.homeService.GetVehicleTypeList().subscribe((res)=>{ 
      this.SideSearchVehicleType.CarType = res;     
      console.log(this.SideSearchVehicleType.CarType);
      //move CertifiedInspected model data  into array// 
      for(let key in this.SideSearchVehicleType.CarType)
      {  
        if(this.SideSearchVehicleType.CarType.hasOwnProperty(key))
        {  
        this.arrVehicleType.push(this.SideSearchVehicleType.CarType[key]);    
        }        
      } 
    });


    this.homeService.GetYearList().subscribe((res)=>{ 
      this.SideSearchVehicleType.Year = res;            
      for(let key in this.SideSearchVehicleType.Year)
      {  
        if(this.SideSearchVehicleType.Year.hasOwnProperty(key))
        {  
        this.arrYear.push(this.SideSearchVehicleType.Year[key]);    
        }        
      } 
    });


     this.GetloggedinUsersCountry();

      
    
     this.fromYearfilteredOptions = this.FromYrControl.valueChanges
     .pipe(
       startWith(''),
       switchMap(value => this.filterYear(value))
     );   

     this.toYearfilteredOptions = this.ToYrControl.valueChanges
     .pipe(
       startWith(''),
       switchMap(value => this.filterYear(value))
     ); 
    
  }
  
  private filterYear(value: string) {
    
    const filterValue = value.toLowerCase();
   return this.homeService.GetYearList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
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
  ExpandLocation(){ 
    const element = document.querySelector("#expand-location");
    const isOpen=element.classList.contains("view-mode-open");
    if(isOpen)
    {
      this.IsExpandLocation='';
    }
    else{
   this.IsExpandLocation='view-mode-open';
    }
  }
  ExpandPrice(){ 
    const element = document.querySelector("#expand-price");
    const isOpen=element.classList.contains("view-mode-open");
    if(isOpen)
    {
      this.IsExpandPrice='';
    }
    else{
   this.IsExpandPrice='view-mode-open';
    }
  }

  ExpandOdometer()
  {
    { 
      const element = document.querySelector("#expand-Odometer");
      const isOpen=element.classList.contains("view-mode-open");
      if(isOpen)
      {
        this.IsExpandOdometer='';
      }
      else{
     this.IsExpandOdometer='view-mode-open';
      }
    }
  }
  ExpandTransmission()
  {
    { 
      const element = document.querySelector("#expand-Transmission");
      const isOpen=element.classList.contains("view-mode-open");
      if(isOpen)
      {
        this.IsExpandTransmission='';
      }
      else{
     this.IsExpandTransmission='view-mode-open';
      }
    }
  }
  ExpandCertifiedinspected()
  {
    { 
      const element = document.querySelector("#expand-certifiedinspected");
      const isOpen=element.classList.contains("view-mode-open");
      if(isOpen)
      {
        this.IsExpandcertifiedinspected='';
      }
      else{
     this.IsExpandcertifiedinspected='view-mode-open';
      }
    }
  }
  ExpandYear(){ 
    const element = document.querySelector("#expand-year");
    const isOpen=element.classList.contains("view-mode-open");
    if(isOpen)
    {
      this.IsExpandYear='';
    }
    else{
   this.IsExpandYear='view-mode-open';
    }
  }
  
  ExpandVehicleType()
  { 
    const element = document.querySelector("#expand-VehicleType");
    const isOpen=element.classList.contains("view-mode-open");
    if(isOpen)
    {
      this.IsExpandVehicleType='';
    }
    else{
   this.IsExpandVehicleType='view-mode-open';
    }
  }
  
  ExpandKeywords()
  { 
    const element = document.querySelector("#expand-Keywords");
    const isOpen=element.classList.contains("view-mode-open");
    if(isOpen)
    {
      this.IsExpandKeywords='';
    }
    else{
   this.IsExpandKeywords='view-mode-open';
    }
  }

  showModelsById(id,name){   
       
    this.homeService.GetModelListForSideSearch(id).subscribe((res)=>{ 
      this.SideSearchListModel.CarModel = res;
      console.log(this.SideSearchListModel.CarModel);
      this.makeClickedName=name;
      
      this.IsVarientEnable=false;
      //move  model data  into array// 
       const localarrModel=[];
      for(let key in this.SideSearchListModel.CarModel)
      {  
        if(this.SideSearchListModel.CarModel.hasOwnProperty(key))
        {  
          if(!localarrModel.includes(this.SideSearchListModel.CarModel[key].id))
          {
            localarrModel.push(this.SideSearchListModel.CarModel[key]);
          }    
        }        
      }
      this.arrModel=localarrModel;
     });   
    }
  
  showVariantById(id,name){
    this.homeService.GetVariantListForSideSearch(id).subscribe((res)=>{ 
      this.SideSearchListModel.Variant = res;  
      this.IsVariantSelected=true;     
      this.modelClickedName=name;
       
      //move  model data  into array// 
       const localarrVariant=[];
      for(let key in this.SideSearchListModel.Variant)
      {  
        if(this.SideSearchListModel.Variant.hasOwnProperty(key))
        {  
          if(!localarrVariant.includes(this.SideSearchListModel.Variant[key].id))
          {
            localarrVariant.push(this.SideSearchListModel.Variant[key]);
          }    
        }        
      }
      this.arrVariant=localarrVariant;
    });   
  }
  ClearModel(){
    this.makeClickedName='';
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
 
  // Getting Selected Makes and Count
  getSelectedModelId() {
    //alert(JSON.stringify(this.arrMake));
    this.selected_Models = this.arrModel.filter(selmod => {
      return selmod.Selected;      
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
     var id:number=+e.target.id.toString().slice(5);  // get the value i.e.ID  of checked checkbox
     let  objIndex = this.arrMake.findIndex(x => x.id==id);  // select the checkec Make from an array 
     
      this.arrMake = this.arrMake.filter(mk => {
        mk.Selected = false;
        return true;
      });
        this.arrMake[objIndex].Selected=true;
        this.sideSearchMakeSelected=this.arrMake.filter(x=>x.Selected==true); // filter selected= true and bind to array
        this.selected_Makes=this.sideSearchMakeSelected;                      // bind it to selected_Makes which will be used into Modal popup
        this.selectedMakesEmit.emit(JSON.stringify(this.sideSearchMakeSelected)); // emit to bind carSearch details 
         this.showModelsById(id, this.arrMake[objIndex].name);
   }
  
   showMoreItems()
   {
      this.paginationLimit = Number(this.paginationLimit) + 3;        
   }
   showLessItems()
   {
     this.paginationLimit = Number(this.paginationLimit) - 3;
   }
   showMoreItemsVariant()
   {
      this.variantpaginationLimit = Number(this.variantpaginationLimit) + 3;        
   }
   showLessItemsVariant()
   {
     this.variantpaginationLimit = Number(this.variantpaginationLimit) - 3;
   }
   showMoreLocation()
   {
      this.locationpaginationLimit = Number(this.locationpaginationLimit) + 3;        
   }
   showLessLocation()
   {
     this.locationpaginationLimit = Number(this.locationpaginationLimit) - 3;
   }

   BindVehicleListBySideSearchCarModelId(e)
   {
       
      var id:number=+e.target.id.toString().slice(6);;  // get the value i.e.ID  of checked checkbox
      let  objIndex = this.arrModel.findIndex(x => x.id==id);  // select the checkec Make from an array 
        //e.target.checked?this.arrModel[objIndex].Selected=true:this.arrModel[objIndex].Selected=false;   //set the Selected=true or Selected=false if unchecked 
        this.arrModel = this.arrModel.filter(md => {
          md.Selected = false;
          return true;
        });
         this.arrModel[objIndex].Selected=true;
         this.sideSearchModelSelected=this.arrModel.filter(x=>x.Selected==true); // filter selected= true and bind to array
         this.selected_Models=this.sideSearchModelSelected;                      // bind it to selected_Makes which will be used into Modal popup
         this.selectedModelEmit.emit(JSON.stringify(this.sideSearchModelSelected)); // emit to bind carSearch details 
         this.showVariantById(id,this.arrModel[objIndex].name);
   }
   BindVehicleListBySideSearchCarVariantId(e)
   {
       
      var id:number=+e.target.id.toString().slice(8); // get the value i.e.ID  of checked checkbox
      let  objIndex = this.arrVariant.findIndex(x => x.id==id);  // select the checkec Make from an array 
      //e.target.checked?this.arrModel[objIndex].Selected=true:this.arrModel[objIndex].Selected=false;   //set the Selected=true or Selected=false if unchecked 
      this.sideSearchVariantSelected = this.arrVariant.filter(vr => {
        vr.Selected = false;
        return true;
      });
         this.arrVariant[objIndex].Selected=true;
         this.sideSearchVariantSelected=this.arrVariant.filter(x=>x.Selected==true); // filter selected= true and bind to array
         this.selected_Variant=this.sideSearchVariantSelected;                      // bind it to selected_Makes which will be used into Modal popup
         this.selectedVariantEmit.emit(JSON.stringify(this.sideSearchVariantSelected)); // emit to bind carSearch details 
      
   }

   GetloggedinUsersCountry()
   {     
    this.homeService.GetloggedinUsersCountry().subscribe((res)=>{ 
      this.GetStatesbyCountry(res.country);

    }); 
   }

   GetStatesbyCountry(country:string)
   {     
    this.states= this.homeService.GetStatesbyCountry(country).subscribe((st)=>{ 
      let cntrystate =st.countries.filter(s=>s.country==country);   
       
      const userStates = cntrystate.map(({ states }) => states);
      if(userStates.length>0)
      {
      this.loogedInUsersStates = userStates.toString().split(',') ;
      }
     // console.log(JSON.stringify(this.loogedInUsersStates));    
      });
   }

   numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  
  onSliderPriceChange(event: any) {   
    this.sliderPrices=[];
   this.sliderPrices.push(event.value);
   this.sliderPrices.push(event.highValue);
   this.selectedPriceEmit.emit(JSON.stringify(this.sliderPrices));
  }
  getCarModelListFromToPrice()
  {
    this.sliderPrices=[];
    this.sliderPrices.push(Number(this.fromPrice));
    this.sliderPrices.push(Number(this.toPrice));
    this.selectedPriceEmit.emit(JSON.stringify(this.sliderPrices));
  }
  getCarModelLisOdometerRange()
  {
    this.sliderOdometer=[];
    this.sliderOdometer.push(Number(this.fromOdometer));
    this.sliderOdometer.push(Number(this.toOdometer));
    this.selectedOdometerEmit.emit(JSON.stringify(this.sliderOdometer));
  }
  BindVehicleListBySideSearchTransmissionId(e)
  {   
     var id:number=+e.target.value;  // get the value i.e.ID  of checked checkbox
     let  objIndex = this.arrTransmission.findIndex(x => x.id==id);  // select the checked Transmission from an array 
     e.target.checked?this.arrTransmission[objIndex].Selected=true:this.arrTransmission[objIndex].Selected=false;   //set the Selected=true or Selected=false if unchecked 
        this.sideSearchTransmissionSelected=this.arrTransmission.filter(x=>x.Selected==true); // filter selected= true and bind to array
       // this.selected_Transmission=this.sideSearchMakeSelected;                      // bind it to selected_Makes which will be used into Modal popup
        this.selectedTransmissionEmit.emit(JSON.stringify(this.sideSearchTransmissionSelected)); // emit to bind carSearch details 
   }
   

   getCarModelLisYearRange() {
    this.sideSearchYearSelected=[];  
     let frmYear = this.arrYear.find(o => o.name===this.FromYrControl.value);
     let toYear=this.arrYear.find(yr => yr.name===this.ToYrControl.value);    

    this.sideSearchYearSelected.push(frmYear);
    this.sideSearchYearSelected.push(toYear);    
    this.selectedYearEmit.emit(JSON.stringify(this.sideSearchYearSelected));   
  }
  BindVehicleListBySideSearchcarCertifiedInspectedId(e)
  {

  } 
  BindVehicleListBySideSearchcarVehicleTypeId(e)
  {

  }
  ExpandSearch(SideSearchName:string)
  {
    const element = document.querySelector("#expand-"+SideSearchName);
    const isOpen=element.classList.contains("view-mode-open");
  
    switch(SideSearchName) {
      case 'Engine':
      isOpen?this.IsExpandEngine='':this.IsExpandEngine='view-mode-open';
       break;
       case 'DriveType':    
       isOpen?this.IsExpandDriveType='':this.IsExpandDriveType='view-mode-open';
       break;
      case 'FuelType':    
       isOpen?this.IsExpandFuelType='':this.IsExpandFuelType='view-mode-open';
       break;
      case "Cylinders":
        isOpen?this.IsExpandCylinders='':this.IsExpandCylinders='view-mode-open';
       break;
      case "EngineSize":
        isOpen?this.IsExpandEngineSize='':this.IsExpandEngineSize='view-mode-open';
        break;
      case "EngineDescription":
        isOpen?this.IsExpandEngineDescription='':this.IsExpandEngineDescription='view-mode-open';
        break;
      case "FuelEconomy":
        isOpen?this.IsExpandFuelEconomy='':this.IsExpandFuelEconomy='view-mode-open';
        break;       
      default:           
          break;
  }

  }
}
