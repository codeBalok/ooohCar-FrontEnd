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
  // public SideSearchListModel = new SideSearchListModel();
  // public SideSearchTransmission = new SideSearchListModel();
  // public SideSearchBodyType = new SideSearchListModel();
  // public SideSearchColour = new SideSearchListModel();
  // public SideSearchYear= new SideSearchListModel();
  // public SideSearchPower= new SideSearchListModel();
  // public SideSearchPowerToWeight=new SideSearchListModel(); 
  // public SideSearchTow=new SideSearchListModel();  
  // public SideSearchEngineSize= new SideSearchListModel();
  // public SideSearchEngineDescription= new SideSearchListModel();
  // public SideSearchCertifiedInspected= new SideSearchListModel();
  // public SideSearchVehicleType= new SideSearchListModel();
  // public SideSearchSeat= new SideSearchListModel();
  // public SideSearchDoors= new SideSearchListModel();
  // public SideSearchLifeStyles= new SideSearchListModel();  
  // public IsExpandMake : string = '';
  // public IsExpandLocation : string = '';
  // public IsExpandPrice: string = '';
  // public IsExpandOdometer: string = '';
  // public IsExpandTransmission:string='';
  // public IsExpandYear:string='';
  // public IsExpandcertifiedinspected:string='';
  // public IsExpandVehicleType:string='';
  // public IsExpandKeywords:string='';
  // public makeClickedName:string='';
  // public modelClickedName:string='';
  // public IsModelSelected:boolean=false;
  // public IsVariantSelected:boolean=false;
  // public IsVarientEnable:boolean=false;
  // public searchText: string = "";
  //  Keyword='name';
  // public selected_count: number = 0;
  // public arrMake = [];   
  // public arrModel= []; 
  // public arrVariant= []; 
  // public arrTransmission=[];
  // public arrBodyType=[];
  // public arrColour=[];  
  // public arrPrice=[];
  // public arrYear=[];
  // public arrSeats=[];
  // public arrDoors=[]
  // public arrLifeStyles=[];
  // public arrPower=[];
  // public arrPowerToWeight=[];
  // public arrTow=[];
  // public arrCertified=[];
  // public arrVehicleType=[];
  // public selected_Makes  = [];
  // public selected_Models  = [];
  // public selected_Variant  = [];
  // public sideSearchMakeSelected  = [];
  // public sideSearchModelSelected  = [];
  // public sideSearchVariantSelected  = [];
  // public sideSearchTransmissionSelected  = [];
  // public sideSearchVehicelTypeSelected= [];
  // public sideSearchBodyTypeSelected  = [];
  // public sideSearchColourSelected  = [];
  // public sideSearchCertifiedInspecteSelected  = [];
  // public sideSearchYearSelected  = []; 
  // public sideSearchSeatSelected  = []; 
  // public sideSearchPowerSelected  = [];   
  // public sideSearchPowerToWeightSelected = [];  
  // public sideSearchTowSelected=[];
  // public sideSearchEngineSizeSelected  = [];  
  // public sideSearchEngineDescriptionSelected=[];
  // public sideSearchEngineDescritiptionSelected=[];
  // public SideSearchTransmissionSelected:false;
  // closeResult: string;
  // public searchSelectedMakes = new SearchSelectedMakes();
  // public vehicleModel : VehicleModel[] = [];
  // public SideSearchMakeSelected:false;
  // startPage : number;
  // paginationLimit:number; 
  // variantstartPage : number;
  // variantpaginationLimit:number; 
  // locationstartPage:number;
  // locationpaginationLimit:number; 
  // colourpaginationLimit:number;        
  // colourstartPage:number;
  
  // @Output() selectedMakesEmit = new EventEmitter<string>();  
  // @Output() selectedModelEmit= new EventEmitter<string>(); 
  // @Output() selectedVariantEmit= new EventEmitter<string>(); 
  // @Output() selectedPriceEmit= new EventEmitter<string>();
  // @Output() selectedOdometerEmit= new EventEmitter<string>();
  // @Output() selectedTransmissionEmit= new EventEmitter<string>();
  // @Output() selectedYearEmit= new EventEmitter<string>();
  // @Output() selectedFuelTypeEmit= new EventEmitter<string>();
  // @Output() selectedCylinderEmit= new EventEmitter<string>();
  // @Output() selectedEngineSizeEmit= new EventEmitter<string>();
  // @Output() selectedEngineDescriptionEmit= new EventEmitter<string>();
  // @Output() selectedFuelEconomyEmit = new EventEmitter<string>();
  // @Output() selectedInductionTurboEmit = new EventEmitter<string>();
  // @Output() selectedPowerEmit= new EventEmitter<string>();
  // @Output() selectedPowerToWeightEmit= new EventEmitter<string>();
  // @Output() selectedTowEmit= new EventEmitter<string>();
  // @Output() selectedDriveTypeEmit= new EventEmitter<string>();
  // @Output() selectedBodyTypeEmit= new EventEmitter<string>();
  // @Output() selectedColourEmit= new EventEmitter<string>();
  // @Output() selectedSeatsEmit= new EventEmitter<string>();
  // @Output() selectedDoorsEmit= new EventEmitter<string>();
  // @Output() selectedLifeStylesEmit= new EventEmitter<string>();
  // @Output() selectedVehicelTypeEmit= new EventEmitter<string>();
  // @Output() selectedCertifiedInspectedEmit= new EventEmitter<string>();
  // states: any = [];
  // sliderPrices:number [] =[];
  // sliderOdometer:number [] =[];
  // loogedInUsersStates: any = [];
  // fromPrice: number ;
  // toPrice: number ;
  // fromOdometer:number;
  // selectedfromYear=this.SideSearchYear.Year ;
  // selectedtoYear=this.SideSearchYear.Year ;
  // selectedfromEngineSize=this.SideSearchEngineSize.EngineSize ;
  // selectedtoEngineSize=this.SideSearchEngineSize.EngineSize ;
  // selectedEngineDescription=this.SideSearchEngineDescription.EngineSize ;
  // selectedfromPower=this.SideSearchPower.Power ;
  // selectedtoPower=this.SideSearchPower.Power ;
  // selectedfromPowerToWeight=this.SideSearchPowerToWeight.PowerToWeight ;
  // selectedtoPowerToWeight=this.SideSearchPowerToWeight.PowerToWeight ;
  // selectedfromTow=this.SideSearchTow.Tow ;
  // selectedtoTow=this.SideSearchTow.Tow ;
   
  // toOdometer:number;
  // minValue: number = 100;
  // maxValue: number = 100000;
  // priceoptions: Options = {
  //   floor: 0,
  //   ceil: 100000,
  //   translate: (value: number, label: LabelType): string => {
  //     switch (label) {
  //       case LabelType.Low:
  //        // return '<b>Min price:</b>AU $' + value;
  //        return '<span class="expand-link">AU $</span>' + value;
  //       case LabelType.High:
  //         return '<span class="expand-link">AU $</span>' + value;
  //       default:
  //         return '<span class="expand-link">AU $</span>' + value;
  //     }
  //   }
  // };
  // public IsExpandEngine:string='';
  // public IsExpandStyle:string='';
  // public IsExpandBodyType:string='';
  // public IsExpandColour:string='';
  // public IsExpandSeats:string='';
  // public IsExpandDoors:string='';
  // public IsExpandLifeStyles:string='';
  // public IsExpandDriveType:string='';
  // public IsExpandFuelType:string='';
  // public IsExpandFuelEconomy:string='';
  // public IsExpandEngineDescription:string='';
  // public IsExpandEngineSize:string='';
  // public IsExpandCylinders:string='';
  // public SideSearchFuelType= new SideSearchListModel();
  // public SideSearchDriveType= new SideSearchListModel();
  // public SideSearchCylinder= new SideSearchListModel();    
  // public SideSearchFuelEconomy= new SideSearchListModel();
  // public SideSearchInductionTurbo= new SideSearchListModel();  
  // public arrFuelType=[];
  // public arrDriveType=[];
  // public arrFuelEconomy=[];
  // public arrEngineDescription=[];
  // public arrEngineSize=[];
  // public arrCylinders=[];
  // public arrInductionTurbo=[];
  // public sideSearchFuelTypeSelected  = [];
  // public sideSearchCylinderSelected  = [];  
  // public IsExpandTow:string='';
  // public IsExpandPowerToWeight:string='';
  // public IsExpandPower:string='';
  // public IsExpandInductionTurbo:string='';


  // FromYrControl = new FormControl();    
  // ToYrControl = new FormControl();    
  // fromYearfilteredOptions: Observable<any[]>;
  // toYearfilteredOptions: Observable<any[]>;
  // fromEngineSizeControl = new FormControl();    
  // toEngineSizeControl = new FormControl();    
  // fromEngineSizefilteredOptions: Observable<any[]>;
  // toEngineSizefilteredOptions: Observable<any[]>;
  // EngineDescriptionControl = new FormControl();  
  // EngineDescriptionfilteredOptions: Observable<any[]>;  
  // FuelEconomyControl= new FormControl();  
  // FuelEconomyfilteredOptions: Observable<any[]>; 
  // DriveTypeControl=new FormControl();
  // DriveTypefilteredOptions: Observable<any[]>; 
  // InductionTurboControl=new FormControl();
  // InductionTurbofilteredOptions: Observable<any[]>;
  // fromPowerfilteredOptions: Observable<any[]>;
  // toPowerfilteredOptions: Observable<any[]>; 
  // fromPowerControl=new FormControl();
  // toPowerControl=new FormControl();
  // toPowerToWeightControl=new FormControl();
  // fromPowerToWeightControl=new FormControl();
  // toTowControl=new FormControl();
  // fromTowControl=new FormControl();
  // fromTowfilteredOptions: Observable<any[]>;
  // toTowfilteredOptions: Observable<any[]>; 
  // fromPowerToWeightfilteredOptions: Observable<any[]>;
  // toPowerToWeightfilteredOptions: Observable<any[]>; 
  // toPricefilteredOptions: Observable<any[]>;
  // FromPriceControl=new FormControl();
  // fromPricefilteredOptions: Observable<any[]>;
  // ToPriceControl=new FormControl();
  // ToSeatControl=new FormControl();
  // toSeatfilteredOptions: Observable<any[]>;
  // fromSeatfilteredOptions: Observable<any[]>;
  // FromSeatControl=new FormControl();
  // DoorsControl=new FormControl();
  // DoorsfilteredOptions: Observable<any[]>;
  // LifeStylesControl=new FormControl();
  // LifeStylesfilteredOptions: Observable<any[]>;


  constructor(private homeService: HomeService,private modalService: NgbModal,private router: Router) {
    // this.startPage = 0;
    // this.paginationLimit = 3;
    // this.variantstartPage = 0;
    // this.variantpaginationLimit = 3;
    // this.locationstartPage = 0;
    // this.locationpaginationLimit = 3;  
    // this.colourstartPage=0;
    // this.colourpaginationLimit=3;    
  }


  ngOnInit(): void {       
    // this.homeService.GetMakeListWithModalCount().subscribe((res)=>{ 
    //   this.SideSearchListModel.Make = res;     
    //   console.log(this.SideSearchListModel.Make);
      
    //   //move Make model data  into array// 
    //   for(let key in this.SideSearchListModel.Make)
    //   {  
    //     if(this.SideSearchListModel.Make.hasOwnProperty(key))
    //     {  
    //     this.arrMake.push(this.SideSearchListModel.Make[key]);    
    //     }        
    //   } 
    // });  
    
    // this.homeService.GetTransmissionList().subscribe((res)=>{ 
    //   this.SideSearchTransmission.Transmission = res;     
    //   console.log(this.SideSearchTransmission.Transmission);
      
    //   //move Transmission model data  into array// 
    //   for(let key in this.SideSearchTransmission.Transmission)
    //   {  
    //     if(this.SideSearchTransmission.Transmission.hasOwnProperty(key))
    //     {  
    //     this.arrTransmission.push(this.SideSearchTransmission.Transmission[key]);    
    //     }        
    //   } 
    // });

    //  this.homeService.GetCertifiedInspectedList().subscribe((res)=>{ 
    //   this.SideSearchCertifiedInspected.CertifiedInspected = res;     
    //   console.log(this.SideSearchCertifiedInspected.CertifiedInspected);
    //   for(let key in this.SideSearchCertifiedInspected.CertifiedInspected)
    //   {  
    //     if(this.SideSearchCertifiedInspected.CertifiedInspected.hasOwnProperty(key))
    //     {  
    //     this.arrCertified.push(this.SideSearchCertifiedInspected.CertifiedInspected[key]);    
    //     }        
    //   } 
    // });


    // this.homeService.GetVehicleTypeList().subscribe((res)=>{ 
    //   this.SideSearchVehicleType.CarType = res;     
    //   console.log(this.SideSearchVehicleType.CarType);
     
    //   for(let key in this.SideSearchVehicleType.CarType)
    //   {  
    //     if(this.SideSearchVehicleType.CarType.hasOwnProperty(key))
    //     {  
    //     this.arrVehicleType.push(this.SideSearchVehicleType.CarType[key]);    
    //     }        
    //   } 
    // });


    // this.homeService.GetYearList().subscribe((res)=>{ 
    //   this.SideSearchVehicleType.Year = res;            
    //   for(let key in this.SideSearchVehicleType.Year)
    //   {  
    //     if(this.SideSearchVehicleType.Year.hasOwnProperty(key))
    //     {  
    //     this.arrYear.push(this.SideSearchVehicleType.Year[key]);    
    //     }        
    //   } 
    // });

    // this.homeService.GetPowerList().subscribe((res)=>{ 
    //   this.SideSearchVehicleType.Power = res;            
    //   for(let key in this.SideSearchVehicleType.Power)
    //   {  
    //     if(this.SideSearchVehicleType.Power.hasOwnProperty(key))
    //     {  
    //     this.arrPower.push(this.SideSearchVehicleType.Power[key]);    
    //     }        
    //   } 
    // });

    //  this.GetloggedinUsersCountry();

      
    
    //  this.fromYearfilteredOptions = this.FromYrControl.valueChanges
    //  .pipe(
    //    startWith(''),
    //    switchMap(value => this.filterYear(value))
    //  );   

    //  this.toYearfilteredOptions = this.ToYrControl.valueChanges
    //  .pipe(
    //    startWith(''),
    //    switchMap(value => this.filterYear(value))
    //  );
     
    //  this.homeService.GetFuelTypeList().subscribe((res)=>{ 
    //   this.SideSearchFuelType.FuelType = res;            
    //   for(let key in this.SideSearchFuelType.FuelType)
    //   {  
    //     if(this.SideSearchFuelType.FuelType.hasOwnProperty(key))
    //     {  
    //     this.arrFuelType.push(this.SideSearchFuelType.FuelType[key]);    
    //     }        
    //   } 
    // });

    // this.homeService.GetDriveTypeList().subscribe((res)=>{ 
    //   this.SideSearchDriveType.DriveType = res;            
    //   for(let key in this.SideSearchDriveType.DriveType)
    //   {  
    //     if(this.SideSearchDriveType.DriveType.hasOwnProperty(key))
    //     {  
    //     this.arrDriveType.push(this.SideSearchDriveType.DriveType[key]);    
    //     }        
    //   } 
    // });
    // this.homeService.GetCylindersList().subscribe((res)=>{ 
    //   this.SideSearchCylinder.Cylinders = res;            
    //   for(let key in this.SideSearchCylinder.Cylinders)
    //   {  
    //     if(this.SideSearchCylinder.Cylinders.hasOwnProperty(key))
    //     {  
    //     this.arrCylinders.push(this.SideSearchCylinder.Cylinders[key]);    
    //     }        
    //   } 
    // });

    // this.homeService.GetEngineSizeList().subscribe((res)=>{ 
    //   this.SideSearchEngineSize.EngineSize = res;            
    //   for(let key in this.SideSearchEngineSize.EngineSize)
    //   {  
    //     if(this.SideSearchEngineSize.EngineSize.hasOwnProperty(key))
    //     {  
    //     this.arrEngineSize.push(this.SideSearchEngineSize.EngineSize[key]);    
    //     }        
    //   } 
    // });

    // this.homeService.GetEngineDescriptionList().subscribe((res)=>{ 
    //   this.SideSearchEngineDescription.EngineDescription = res;            
    //   for(let key in this.SideSearchEngineDescription.EngineDescription)
    //   {  
    //     if(this.SideSearchEngineDescription.EngineDescription.hasOwnProperty(key))
    //     {  
    //     this.arrEngineDescription.push(this.SideSearchEngineDescription.EngineDescription[key]);    
    //     }        
    //   } 
    // });
    
    // this.homeService.GetFuelEconomyList().subscribe((res)=>{ 
    //   this.SideSearchFuelEconomy.FuelEconomy = res;            
    //   for(let key in this.SideSearchFuelEconomy.FuelEconomy)
    //   {  
    //     if(this.SideSearchFuelEconomy.FuelEconomy.hasOwnProperty(key))
    //     {  
    //     this.arrFuelEconomy.push(this.SideSearchFuelEconomy.FuelEconomy[key]);    
    //     }        
    //   } 
    // });


//     this.homeService.GetInductionTurboList().subscribe((res)=>{ 
//       this.SideSearchInductionTurbo.InductionTurbo = res;            
//       for(let key in this.SideSearchInductionTurbo.InductionTurbo)
//       {  
//         if(this.SideSearchInductionTurbo.InductionTurbo.hasOwnProperty(key))
//         {  
//         this.arrInductionTurbo.push(this.SideSearchInductionTurbo.InductionTurbo[key]);    
//         }        
//       } 
//     });

//     this.homeService.GetPowerList().subscribe((res)=>{ 
//       this.SideSearchPower.Power = res;            
//       for(let key in this.SideSearchPower.Power)
//       {  
//         if(this.SideSearchPower.Power.hasOwnProperty(key))
//         {  
//         this.arrPower.push(this.SideSearchPower.Power[key]);    
//         }        
//       } 
//     });

//     this.homeService.GetPowerToWeightList().subscribe((res)=>{ 
//       this.SideSearchPowerToWeight.PowerToWeight = res;            
//       for(let key in this.SideSearchPowerToWeight.PowerToWeight)
//       {  
//         if(this.SideSearchPowerToWeight.PowerToWeight.hasOwnProperty(key))
//         {  
//         this.arrPowerToWeight.push(this.SideSearchPowerToWeight.PowerToWeight[key]);    
//         }        
//       } 
//     });

//     this.homeService.GetTowList().subscribe((res)=>{ 
//       this.SideSearchTow.Tow = res;            
//       for(let key in this.SideSearchTow.Tow)
//       {  
//         if(this.SideSearchTow.Tow.hasOwnProperty(key))
//         {  
//         this.arrTow.push(this.SideSearchTow.Tow[key]);    
//         }        
//       } 
//     });


//     this.fromEngineSizefilteredOptions = this.fromEngineSizeControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterEngineSize(value))
//     );   

//     this.toEngineSizefilteredOptions = this.toEngineSizeControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterEngineSize(value))
//     );

//     this.EngineDescriptionfilteredOptions = this.EngineDescriptionControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterEngineDescription(value))
//     ); 
    
//     this.FuelEconomyfilteredOptions = this.FuelEconomyControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterFuelEconomy(value))
//     ); 
      
//     this.DriveTypefilteredOptions = this.DriveTypeControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterDriveType(value))
//     );

//     this.InductionTurbofilteredOptions = this.InductionTurboControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterInductionTurbo(value))
//     ); 

//     this.fromPowerfilteredOptions = this.fromPowerControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterPower(value))
//     );   

//     this.toPowerfilteredOptions = this.toPowerControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterPower(value))
//     );

//     this.fromPowerToWeightfilteredOptions = this.fromPowerToWeightControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterPowerToWeight(value))
//     );   

//     this.toPowerToWeightfilteredOptions = this.toPowerToWeightControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterPowerToWeight(value))
//     );
//     this.fromTowfilteredOptions = this.fromTowControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterTow(value))
//     );   

//     this.toTowfilteredOptions = this.toTowControl.valueChanges
//     .pipe(
//       startWith(''),
//       switchMap(value => this.filterTow(value))
//     );

//     this.homeService.GetBodyTypeList().subscribe((res)=>{ 
//       this.SideSearchBodyType.BodyType = res;     
//       console.log(this.SideSearchBodyType.BodyType); 
//       for(let key in this.SideSearchBodyType.BodyType)
//       {  
//         if(this.SideSearchBodyType.BodyType.hasOwnProperty(key))
//         {  
//         this.arrBodyType.push(this.SideSearchBodyType.BodyType[key]);    
//         }        
//       } 
//     });

//     this.homeService.GetColourList().subscribe((res)=>{ 
//       this.SideSearchColour.Colour = res;     
//       console.log(this.SideSearchColour.Colour); 
//       for(let key in this.SideSearchColour.Colour)
//       {  
//         if(this.SideSearchColour.Colour.hasOwnProperty(key))
//         {  
//         this.arrColour.push(this.SideSearchColour.Colour[key]);    
//         }        
//       } 
//     });

    
//  this.homeService.GetPriceList().subscribe((res)=>{ 
//   this.SideSearchVehicleType.Price = res;            
//   for(let key in this.SideSearchVehicleType.Price)
//   {  
//     if(this.SideSearchVehicleType.Price.hasOwnProperty(key))
//     {  
//     this.arrPrice.push(this.SideSearchVehicleType.Price[key]);    
//     }        
//   } 
// });

// this.fromPricefilteredOptions = this.FromPriceControl.valueChanges
// .pipe(
//   startWith(''),
//   switchMap(value => this.filterPrice(value))
// );   

// this.toPricefilteredOptions = this.ToPriceControl.valueChanges
// .pipe(
//   startWith(''),
//   switchMap(value => this.filterPrice(value))
// );
 
// this.homeService.GetPriceList().subscribe((res)=>{ 
//   this.SideSearchVehicleType.Price = res;            
//   for(let key in this.SideSearchVehicleType.Price)
//   {  
//     if(this.SideSearchVehicleType.Price.hasOwnProperty(key))
//     {  
//     this.arrPrice.push(this.SideSearchVehicleType.Price[key]);    
//     }        
//   } 
// });

// this.homeService.GetSeatsList().subscribe((res)=>{ 
//   this.SideSearchSeat.Seat = res;            
//   for(let key in this.SideSearchSeat.Seat)
//   {  
//     if(this.SideSearchSeat.Seat.hasOwnProperty(key))
//     {  
//     this.arrSeats.push(this.SideSearchSeat.Seat[key]);    
//     }        
//   } 
// });

// this.fromSeatfilteredOptions = this.FromSeatControl.valueChanges
// .pipe(
//   startWith(''),
//   switchMap(value => this.filterSeat(value))
// );   

// this.toSeatfilteredOptions = this.ToSeatControl.valueChanges
// .pipe(
//   startWith(''),
//   switchMap(value => this.filterSeat(value))
// );
// this.homeService.GetLifeStylesList().subscribe((res)=>{ 
//   this.SideSearchLifeStyles.LifeStyles = res;            
//   for(let key in this.SideSearchLifeStyles.LifeStyles)
//   {  
//     if(this.SideSearchLifeStyles.LifeStyles.hasOwnProperty(key))
//     {  
//     this.arrLifeStyles.push(this.SideSearchLifeStyles.LifeStyles[key]);    
//     }        
//   } 
// });


// this.homeService.GetDoorsList().subscribe((res)=>{ 
//   this.SideSearchDoors.Doors = res;            
//   for(let key in this.SideSearchDoors.Doors)
//   {  
//     if(this.SideSearchDoors.Doors.hasOwnProperty(key))
//     {  
//     this.arrDoors.push(this.SideSearchDoors.Doors[key]);    
//     }        
//   } 
// });
// this.DoorsfilteredOptions = this.DoorsControl.valueChanges
// .pipe(
//   startWith(''),
//   switchMap(value => this.filterDoors(value))
// ); 

// this.LifeStylesfilteredOptions = this.LifeStylesControl.valueChanges
// .pipe(
//   startWith(''),
//   switchMap(value => this.filterLifeStyles(value))
// ); 


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

  private filterEngineSize(value: string) {
    
    const filterValue = value.toLowerCase();
   return this.homeService.GetEngineSizeList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }
 
  public filterEngineDescription(value: string) {    
    const filterValue = value.toLowerCase();
   return this.homeService.GetEngineDescriptionList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }

  public filterFuelEconomy(value: string) {    
    const filterValue = value.toLowerCase();
   return this.homeService.GetFuelEconomyList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }
  public filterDriveType(value: string) {    
    const filterValue = value.toLowerCase();
   return this.homeService.GetDriveTypeList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }
  
  public filterInductionTurbo(value: string) {    
    const filterValue = value.toLowerCase();
   return this.homeService.GetDriveTypeList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }

  private filterPower(value: string) {
    const filterValue = value.toLowerCase();
   return this.homeService.GetPowerList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }
  
  private filterPowerToWeight (value: string) {
    const filterValue = value.toLowerCase();
   return this.homeService.GetPowerToWeightList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }
  private filterTow (value: string) {
    const filterValue = value.toLowerCase();
   return this.homeService.GetTowList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }
  private filterPrice(value: string) {
    
    const filterValue = value.toLowerCase();
   return this.homeService.GetPriceList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }
  private filterSeat(value: string) {
    
    const filterValue = value.toLowerCase();
   return this.homeService.GetSeatsList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }
  private filterLifeStyles(value: string) {
    
    const filterValue = value.toLowerCase();
   return this.homeService.GetLifeStylesList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }

  private filterDoors(value: string) {
    
    const filterValue = value.toLowerCase();
   return this.homeService.GetDoorsList().pipe(
      filter(data => !!data),
      map((data) => {        
        return data.filter(option => option.name.toLowerCase().includes(value))
      })
    )     
  }
  // ExpandMake(){ 
  //   const element = document.querySelector("#expand-make");
  //   const isOpen=element.classList.contains("view-mode-open");
  //   if(isOpen)
  //   {
  //     this.IsExpandMake='';
  //   }
  //   else{
  //  this.IsExpandMake='view-mode-open';
  //   }
  // }
  // ExpandLocation(){ 
  //   const element = document.querySelector("#expand-location");
  //   const isOpen=element.classList.contains("view-mode-open");
  //   if(isOpen)
  //   {
  //     this.IsExpandLocation='';
  //   }
  //   else{
  //  this.IsExpandLocation='view-mode-open';
  //   }
  // }
  // ExpandPrice(){ 
  //   const element = document.querySelector("#expand-price");
  //   const isOpen=element.classList.contains("view-mode-open");
  //   if(isOpen)
  //   {
  //     this.IsExpandPrice='';
  //   }
  //   else{
  //  this.IsExpandPrice='view-mode-open';
  //   }
  // }

  // ExpandOdometer()
  // {
  //   { 
  //     const element = document.querySelector("#expand-Odometer");
  //     const isOpen=element.classList.contains("view-mode-open");
  //     if(isOpen)
  //     {
  //       this.IsExpandOdometer='';
  //     }
  //     else{
  //    this.IsExpandOdometer='view-mode-open';
  //     }
  //   }
  // }
  // ExpandTransmission()
  // {
  //   { 
  //     const element = document.querySelector("#expand-Transmission");
  //     const isOpen=element.classList.contains("view-mode-open");
  //     if(isOpen)
  //     {
  //       this.IsExpandTransmission='';
  //     }
  //     else{
  //    this.IsExpandTransmission='view-mode-open';
  //     }
  //   }
  // }
  // ExpandCertifiedinspected()
  // {
  //   { 
  //     const element = document.querySelector("#expand-certifiedinspected");
  //     const isOpen=element.classList.contains("view-mode-open");
  //     if(isOpen)
  //     {
  //       this.IsExpandcertifiedinspected='';
  //     }
  //     else{
  //    this.IsExpandcertifiedinspected='view-mode-open';
  //     }
  //   }
  // }
  // ExpandYear(){ 
  //   const element = document.querySelector("#expand-year");
  //   const isOpen=element.classList.contains("view-mode-open");
  //   if(isOpen)
  //   {
  //     this.IsExpandYear='';
  //   }
  //   else{
  //  this.IsExpandYear='view-mode-open';
  //   }
  // }
  
  // ExpandVehicleType()
  // { 
  //   const element = document.querySelector("#expand-VehicleType");
  //   const isOpen=element.classList.contains("view-mode-open");
  //   if(isOpen)
  //   {
  //     this.IsExpandVehicleType='';
  //   }
  //   else{
  //  this.IsExpandVehicleType='view-mode-open';
  //   }
  // }
  
  // ExpandKeywords()
  // { 
  //   const element = document.querySelector("#expand-Keywords");
  //   const isOpen=element.classList.contains("view-mode-open");
  //   if(isOpen)
  //   {
  //     this.IsExpandKeywords='';
  //   }
  //   else{
  //  this.IsExpandKeywords='view-mode-open';
  //   }
  // }

  // showModelsById(id,name){   
       
  //   this.homeService.GetModelListForSideSearch(id).subscribe((res)=>{ 
  //     this.SideSearchListModel.CarModel = res;
  //     console.log(this.SideSearchListModel.CarModel);
  //     this.makeClickedName=name;
      
  //     this.IsVarientEnable=false;
  //     //move  model data  into array// 
  //      const localarrModel=[];
  //     for(let key in this.SideSearchListModel.CarModel)
  //     {  
  //       if(this.SideSearchListModel.CarModel.hasOwnProperty(key))
  //       {  
  //         if(!localarrModel.includes(this.SideSearchListModel.CarModel[key].id))
  //         {
  //           localarrModel.push(this.SideSearchListModel.CarModel[key]);
  //         }    
  //       }        
  //     }
  //     this.arrModel=localarrModel;
  //    });   
  //   }
  
  // showVariantById(id,name){
  //   this.homeService.GetVariantListForSideSearch(id).subscribe((res)=>{ 
  //     this.SideSearchListModel.Variant = res;  
  //     this.IsVariantSelected=true;     
  //     this.modelClickedName=name;
       
  //     //move  model data  into array// 
  //      const localarrVariant=[];
  //     for(let key in this.SideSearchListModel.Variant)
  //     {  
  //       if(this.SideSearchListModel.Variant.hasOwnProperty(key))
  //       {  
  //         if(!localarrVariant.includes(this.SideSearchListModel.Variant[key].id))
  //         {
  //           localarrVariant.push(this.SideSearchListModel.Variant[key]);
  //         }    
  //       }        
  //     }
  //     this.arrVariant=localarrVariant;
  //   });   
  // }
  // ClearModel(){
  //   this.makeClickedName='';
  //   this.IsModelSelected=false;

  //   // clear all the selected checkbox 
  //   this.arrMake = this.arrMake.filter(mk => {
  //     mk.Selected = false;
  //     return true;
  //   });
  //   this.SideSearchListModel.Make=JSON.parse(JSON.stringify(this.arrMake));
  //   this.clearSelection();
  //   this.selectedMakesEmit.emit(JSON.stringify(this.selected_Makes));
    
  // }

  // clearFilter() {
  //   this.searchText = "";
  // }
  // // Clearing All Selections in Modal
  // clearSelection() {     
  //   this.searchText = "";
  //   this.arrMake = this.arrMake.filter(mk => {
  //     mk.Selected = false;
  //     return true;
  //   });
  //   this.getSelectedMakeId();    
  // }

   
  // // Getting Selected Makes and Count
  // getSelectedMakeId() {
  //   //alert(JSON.stringify(this.arrMake));
  //   this.selected_Makes = this.arrMake.filter(selmak => {
  //     return selmak.Selected;      
  //   });     
  //   //this.selected_count = this.selected_Makes.length;
  //   //alert(this.selected_count);      
  // }
 
 
  // getSelectedModelId() {
  //   this.selected_Models = this.arrModel.filter(selmod => {
  //     return selmod.Selected;      
  //   });     
  // }

  // searchbuttonClick()
  // {          
  //   this.modalService.dismissAll(this.selected_Makes);    
  //   this.selectedMakesEmit.emit(JSON.stringify(this.selected_Makes));
  //   this.selected_Makes.length>0? this.IsExpandMake='view-mode-open':this.IsExpandMake='';
  //   if(this.selected_Makes.length>0)
  //   {
  //    let SelectedMake  = this.arrMake.filter(x => this.selected_Makes.includes(x));   
  //    this.SideSearchListModel.Make=JSON.parse(JSON.stringify(SelectedMake));          
  //   }
  //   else
  //   {
  //      this.SideSearchListModel.Make=JSON.parse(JSON.stringify(this.arrMake));
  //   }  

  // }

  // BindVehicleListBySideSearchMakeId(e)
  // {   
  //    var id:number=+e.target.id.toString().slice(5);  // get the value i.e.ID  of checked checkbox
  //    let  objIndex = this.arrMake.findIndex(x => x.id==id);  // select the checkec Make from an array 
     
  //     this.arrMake = this.arrMake.filter(mk => {
  //       mk.Selected = false;
  //       return true;
  //     });
  //       this.arrMake[objIndex].Selected=true;
  //       this.sideSearchMakeSelected=this.arrMake.filter(x=>x.Selected==true); // filter selected= true and bind to array
  //       this.selected_Makes=this.sideSearchMakeSelected;                      // bind it to selected_Makes which will be used into Modal popup
  //       this.selectedMakesEmit.emit(JSON.stringify(this.sideSearchMakeSelected)); // emit to bind carSearch details 
  //        this.showModelsById(id, this.arrMake[objIndex].name);
  //  }
  
  //  showMoreItems()
  //  {
  //     this.paginationLimit = Number(this.paginationLimit) + 3;        
  //  }
  //  showLessItems()
  //  {
  //    this.paginationLimit = Number(this.paginationLimit) - 3;
  //  }
  //  showMoreItemsVariant()
  //  {
  //     this.variantpaginationLimit = Number(this.variantpaginationLimit) + 3;        
  //  }
  //  showLessItemsVariant()
  //  {
  //    this.variantpaginationLimit = Number(this.variantpaginationLimit) - 3;
  //  }
  //  showMoreLocation()
  //  {
  //     this.locationpaginationLimit = Number(this.locationpaginationLimit) + 3;        
  //  }
  //  showLessLocation()
  //  {
  //    this.locationpaginationLimit = Number(this.locationpaginationLimit) - 3;
  //  }

  //  BindVehicleListBySideSearchCarModelId(e)
  //  {
       
  //     var id:number=+e.target.id.toString().slice(6);;  
  //     let  objIndex = this.arrModel.findIndex(x => x.id==id); 
        
  //       this.arrModel = this.arrModel.filter(md => {
  //         md.Selected = false;
  //         return true;
  //       });
  //        this.arrModel[objIndex].Selected=true;
  //        this.sideSearchModelSelected=this.arrModel.filter(x=>x.Selected==true); // filter selected= true and bind to array
  //        this.selected_Models=this.sideSearchModelSelected;                      // bind it to selected_Makes which will be used into Modal popup
  //        this.selectedModelEmit.emit(JSON.stringify(this.sideSearchModelSelected)); // emit to bind carSearch details 
  //        this.showVariantById(id,this.arrModel[objIndex].name);
  //  }
  //  BindVehicleListBySideSearchCarVariantId(e)
  //  {
       
  //     var id:number=+e.target.id.toString().slice(8); // get the value i.e.ID  of checked checkbox
  //     let  objIndex = this.arrVariant.findIndex(x => x.id==id);  // select the checkec Make from an array 
  //     //e.target.checked?this.arrModel[objIndex].Selected=true:this.arrModel[objIndex].Selected=false;   //set the Selected=true or Selected=false if unchecked 
  //     this.sideSearchVariantSelected = this.arrVariant.filter(vr => {
  //       vr.Selected = false;
  //       return true;
  //     });
  //        this.arrVariant[objIndex].Selected=true;
  //        this.sideSearchVariantSelected=this.arrVariant.filter(x=>x.Selected==true); // filter selected= true and bind to array
  //        this.selected_Variant=this.sideSearchVariantSelected;                      // bind it to selected_Makes which will be used into Modal popup
  //        this.selectedVariantEmit.emit(JSON.stringify(this.sideSearchVariantSelected)); // emit to bind carSearch details 
      
  //  }

  //  GetloggedinUsersCountry()
  //  {     
  //   this.homeService.GetloggedinUsersCountry().subscribe((res)=>{ 
  //     this.GetStatesbyCountry(res.country);

  //   }); 
  //  }

  //  GetStatesbyCountry(country:string)
  //  {     
  //   this.states= this.homeService.GetStatesbyCountry(country).subscribe((st)=>{ 
  //     let cntrystate =st.countries.filter(s=>s.country==country);   
       
  //     const userStates = cntrystate.map(({ states }) => states);
  //     if(userStates.length>0)
  //     {
  //     this.loogedInUsersStates = userStates.toString().split(',') ;
  //     }
  //    
  //     });
  //  }

  //  numberOnly(event): boolean {
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     return false;
  //   }
  //   return true;

  // }
  
  // onSliderPriceChange(event: any) {   
  //   this.sliderPrices=[];
  //  this.sliderPrices.push(event.value);
  //  this.sliderPrices.push(event.highValue);
  //  this.selectedPriceEmit.emit(JSON.stringify(this.sliderPrices));
  // }
//   getCarModelListFromToPrice()
//   {
//     this.sliderPrices=[];
//     this.sliderPrices.push(Number(this.FromPriceControl.value));
//     this.sliderPrices.push(Number(this.ToPriceControl.value));
//     this.selectedPriceEmit.emit(JSON.stringify(this.sliderPrices));
//   }
//   getCarModelLisOdometerRange()
//   {
//     this.sliderOdometer=[];
//     this.sliderOdometer.push(Number(this.fromOdometer));
//     this.sliderOdometer.push(Number(this.toOdometer));
//     this.selectedOdometerEmit.emit(JSON.stringify(this.sliderOdometer));
//   }
//   BindVehicleListBySideSearchTransmissionId(e)
//   {   
//      var id:number=+e.target.value;  // get the value i.e.ID  of checked checkbox
//      let  objIndex = this.arrTransmission.findIndex(x => x.id==id);  // select the checked Transmission from an array 
//      e.target.checked?this.arrTransmission[objIndex].Selected=true:this.arrTransmission[objIndex].Selected=false;   //set the Selected=true or Selected=false if unchecked 
//         this.sideSearchTransmissionSelected=this.arrTransmission.filter(x=>x.Selected==true); // filter selected= true and bind to array
//        // this.selected_Transmission=this.sideSearchMakeSelected;                      // bind it to selected_Makes which will be used into Modal popup
//         this.selectedTransmissionEmit.emit(JSON.stringify(this.sideSearchTransmissionSelected)); // emit to bind carSearch details 
//    }
   

//    getCarModelLisYearRange() {
//     this.sideSearchYearSelected=[];  
//      let frmYear = this.arrYear.find(o => o.name===this.FromYrControl.value);
//      let toYear=this.arrYear.find(yr => yr.name===this.ToYrControl.value);    

//     this.sideSearchYearSelected.push(frmYear);
//     this.sideSearchYearSelected.push(toYear);    
//     this.selectedYearEmit.emit(JSON.stringify(this.sideSearchYearSelected));   
//   }
  
//   BindVehicleListBySideSearchcarVehicleTypeId(e)
//   {
//     var id:number=+e.target.value;  // get the value i.e.ID  of checked checkbox
//     let  objIndex = this.arrVehicleType.findIndex(x => x.id==id);  // select the checked VehicelType from an array 
//     e.target.checked?this.arrVehicleType[objIndex].Selected=true:this.arrVehicleType[objIndex].Selected=false;   //set the Selected=true or Selected=false if unchecked 
//     this.sideSearchVehicelTypeSelected=this.arrVehicleType.filter(x=>x.Selected==true); // filter selected= true and bind to array
//     this.selectedVehicelTypeEmit.emit(JSON.stringify(this.sideSearchVehicelTypeSelected));
//   } 
//   ExpandSearch(SideSearchName:string)  
//   {
//     const element = document.querySelector("#expand-"+SideSearchName);
//     const isOpen=element.classList.contains("view-mode-open");
  
//     switch(SideSearchName) {
//       case 'Engine':
//       isOpen?this.IsExpandEngine='':this.IsExpandEngine='view-mode-open';
//        break;
//        case 'DriveType':    
//        isOpen?this.IsExpandDriveType='':this.IsExpandDriveType='view-mode-open';
//        break;
//       case 'FuelType':    
//        isOpen?this.IsExpandFuelType='':this.IsExpandFuelType='view-mode-open';
//        break;
//       case "Cylinders":
//         isOpen?this.IsExpandCylinders='':this.IsExpandCylinders='view-mode-open';
//        break;
//       case "EngineSize":
//         isOpen?this.IsExpandEngineSize='':this.IsExpandEngineSize='view-mode-open';
//         break;
//       case "EngineDescription":
//         isOpen?this.IsExpandEngineDescription='':this.IsExpandEngineDescription='view-mode-open';
//         break;
//       case "FuelEconomy":
//         isOpen?this.IsExpandFuelEconomy='':this.IsExpandFuelEconomy='view-mode-open';
//         break;        
//        case "InductionTurbo":
//           isOpen?this.IsExpandInductionTurbo='':this.IsExpandInductionTurbo='view-mode-open';
//           break;       
//       case "Power":
//             isOpen?this.IsExpandPower='':this.IsExpandPower='view-mode-open';
//             break; 
//       case "PowerToWeight":
//             isOpen?this.IsExpandPowerToWeight='':this.IsExpandPowerToWeight='view-mode-open';
//             break;  
//       case "Tow":
//             isOpen?this.IsExpandTow='':this.IsExpandTow='view-mode-open';
//              break;   
//       case 'Style':
//               isOpen?this.IsExpandStyle='':this.IsExpandStyle='view-mode-open';
//                break; 
//       case  'BodyType':
//              isOpen?this.IsExpandBodyType='':this.IsExpandBodyType='view-mode-open';
//              break; 
//       case  'Colour':
//             isOpen?this.IsExpandColour='':this.IsExpandColour='view-mode-open';
//             break; 
//       case  'Seats':
//             isOpen?this.IsExpandSeats='':this.IsExpandSeats='view-mode-open';
//             break; 
//       case  'Doors':
//             isOpen?this.IsExpandDoors='':this.IsExpandDoors='view-mode-open';
//             break; 
//       case  'LifeStyles':
//             isOpen?this.IsExpandLifeStyles='':this.IsExpandLifeStyles='view-mode-open';
//             break;         
//       default:           
//           break;
//   }
  
// }
// BindVehicleListBySideSearchFuelType(e)
// {
//   var id:number=+e.target.value;  
//   let  objIndex = this.arrFuelType.findIndex(x => x.id==id);  
//   e.target.checked?this.arrFuelType[objIndex].Selected=true:this.arrFuelType[objIndex].Selected=false;   
//      this.sideSearchFuelTypeSelected=this.arrFuelType.filter(x=>x.Selected==true);       
//      this.selectedFuelTypeEmit.emit(JSON.stringify(this.sideSearchFuelTypeSelected)); 
// }

// BindVehicleListBySideSearchCylinder(e)
// { 
//   var id:number=+e.target.value;   
//   let  objIndex = this.arrCylinders.findIndex(x => x.id==id);   
//   e.target.checked?this.arrCylinders[objIndex].Selected=true:this.arrCylinders[objIndex].Selected=false;   
//      this.sideSearchCylinderSelected=this.arrCylinders.filter(x=>x.Selected==true);                           
//      this.selectedCylinderEmit.emit(JSON.stringify(this.sideSearchCylinderSelected));  
// }
// getCarModelListEngineSizeRange() {
//   this.sideSearchEngineSizeSelected=[];  
//    let frmEngineSize = this.arrEngineSize.find(frmEz => frmEz.name===this.fromEngineSizeControl.value);
//    let toEngineSize=this.arrEngineSize.find(toEz => toEz.name===this.toEngineSizeControl.value);    

//   this.sideSearchEngineSizeSelected.push(frmEngineSize);
//   this.sideSearchEngineSizeSelected.push(toEngineSize);    
//   this.selectedEngineSizeEmit.emit(JSON.stringify(this.sideSearchEngineSizeSelected));   
// }
// getCarModelListEngineDescription()
//   {   
//     let engineDescription = this.arrEngineDescription.find(engdsc => engdsc.name===this.EngineDescriptionControl.value);
//      this.selectedEngineDescriptionEmit.emit(JSON.stringify(engineDescription)); 
//   }
//   getCarModelListFuelEconomy()
//   {   
//     let fuelEconomy = this.arrFuelEconomy.find(fuelEcnmy => fuelEcnmy.name===this.FuelEconomyControl.value);   
//     this.selectedFuelEconomyEmit.emit(JSON.stringify(fuelEconomy)); 
//   }   
//   getCarModelListInductionTurbo()
//   {
//     let indutionTurbo = this.arrInductionTurbo.find(indturbo => indturbo.name===this.InductionTurboControl.value);   
//     this.selectedInductionTurboEmit.emit(JSON.stringify(indutionTurbo)); 
//   }
//   getCarModelListByPowerRange() {
//     this.sideSearchPowerSelected=[];  
//     let frmPower = this.arrPower.find(o => o.name===this.fromPowerControl.value);
//     let toPower=this.arrPower.find(yr => yr.name===this.toPowerControl.value);    

//    this.sideSearchPowerSelected.push(frmPower);
//    this.sideSearchPowerSelected.push(toPower);    
//    this.selectedPowerEmit.emit(JSON.stringify(this.sideSearchPowerSelected));   
//   }
//   getCarModelListByPowerToWeightRange()
//   {
//     this.sideSearchPowerToWeightSelected=[];  
//     let frmPowerToWeight = this.arrPowerToWeight.find(o => o.name===this.fromPowerToWeightControl.value);
//     let toPowerToWeight=this.arrPowerToWeight.find(pr => pr.name===this.toPowerToWeightControl.value);    

//    this.sideSearchPowerToWeightSelected.push(frmPowerToWeight);
//    this.sideSearchPowerToWeightSelected.push(toPowerToWeight);    
//    this.selectedPowerToWeightEmit.emit(JSON.stringify(this.sideSearchPowerToWeightSelected));   
//   }
//   getCarModelListByTowRange()
//   {
//     this.sideSearchTowSelected=[];  
//     let frmTow = this.arrTow.find(ftw => ftw.name===this.fromTowControl.value);
//     let toTow=this.arrTow.find(ttw => ttw.name===this.toTowControl.value);    

//    this.sideSearchTowSelected.push(frmTow);
//    this.sideSearchTowSelected.push(toTow);    
//    this.selectedTowEmit.emit(JSON.stringify(this.sideSearchTowSelected));   
//   }
//   getCarModelListDriveType()
//   {   
//     let driveType = this.arrDriveType.find(drvtype => drvtype.name===this.DriveTypeControl.value);   
//     this.selectedDriveTypeEmit.emit(JSON.stringify(driveType)); 
//   } 
  
//   BindVehicleListBySideSearchBodyTypeId(e)
//   {
//     var id:number=+e.target.value;  // get the value i.e.ID  of checked checkbox
//     let  objIndex = this.arrBodyType.findIndex(x => x.id==id);  // select the checked BodyType from an array 
//     e.target.checked?this.arrBodyType[objIndex].Selected=true:this.arrBodyType[objIndex].Selected=false;   //set the Selected=true or Selected=false if unchecked 
//     this.sideSearchBodyTypeSelected=this.arrBodyType.filter(x=>x.Selected==true); // filter selected= true and bind to array
//     this.selectedBodyTypeEmit.emit(JSON.stringify(this.sideSearchBodyTypeSelected)); // emit to bind carSearch details 
//   }
//   BindVehicleListBySideSearchColourId(e)
//   {
//     var id:number=+e.target.value;  // get the value i.e.ID  of checked checkbox
//     let  objIndex = this.arrColour.findIndex(x => x.id==id);  // select the checked Colour from an array 
//     e.target.checked?this.arrColour[objIndex].Selected=true:this.arrColour[objIndex].Selected=false;   //set the Selected=true or Selected=false if unchecked 
//     this.sideSearchColourSelected=this.arrColour.filter(x=>x.Selected==true); // filter selected= true and bind to array
//     this.selectedColourEmit.emit(JSON.stringify(this.sideSearchColourSelected)); // emit to bind carSearch details 
//   }

//   showMoreColourItems()
//   {
//      this.colourpaginationLimit = Number(this.colourpaginationLimit) + 3;        
//   }
//   showLessColourItems()
//   {
//      this.colourpaginationLimit = Number(this.colourpaginationLimit) - 3;        
//   }
//   getCarModelLisSeatsRange() {
//     this.sideSearchSeatSelected=[];  
//      let frmSeats = this.arrSeats.find(o => o.name===this.FromSeatControl.value);
//      let toSeats=this.arrSeats.find(st => st.name===this.ToSeatControl.value);    

//     this.sideSearchSeatSelected.push(frmSeats);
//     this.sideSearchSeatSelected.push(toSeats);
    
//     this.selectedSeatsEmit.emit(JSON.stringify(this.sideSearchSeatSelected));   
//   }

//   getCarModelListDoors()
//   {   
//     let Doors = this.arrDoors.find(dr=> dr.name===this.DoorsControl.value);   
//     this.selectedDoorsEmit.emit(JSON.stringify(Doors)); 
//   } 
//    getCarModelListLifeStyles()
//   {   
//     let LifeStyles = this.arrLifeStyles.find(lf => lf.name===this.LifeStylesControl.value);   
//     this.selectedLifeStylesEmit.emit(JSON.stringify(LifeStyles)); 
//   } 
//   BindVehicleListBySideSearchcarCertifiedInspectedId(e)
//   {
//     var id:number=+e.target.value;  // get the value i.e.ID  of checked checkbox
//     let  objIndex = this.arrCertified.findIndex(x => x.id==id);  // select the checked CertifiedInspected from an array 
//     e.target.checked?this.arrCertified[objIndex].Selected=true:this.arrCertified[objIndex].Selected=false;   //set the Selected=true or Selected=false if unchecked 
//     this.sideSearchCertifiedInspecteSelected=this.arrCertified.filter(x=>x.Selected==true); // filter selected= true and bind to array
//     this.selectedCertifiedInspectedEmit.emit(JSON.stringify(this.sideSearchCertifiedInspecteSelected)); // emit to bind carSearch details 
//   }
}