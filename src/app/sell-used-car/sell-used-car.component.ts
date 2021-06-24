import { Component, ElementRef, OnInit ,ViewChild,ViewEncapsulation} from '@angular/core';
import { HomeService } from '../home/home.service';
import {AddNewCarListModel} from '../shared/models/AddNewCarModel';
import { sellusedcarService } from './sell-used-car.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { addvehicleForm } from '../shared/models/AddNewCarModel';
import { IpServiceService } from '../ip-service.service'; 
import {LocationSerivceService} from '../location-serivce.service';
import {ToastrService } from 'ngx-toastr';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {SelectItem} from 'primeng/api';


interface City {
  name: string,
  code: string
}

declare var $: any;
@Component({
  selector: 'app-sell-used-car',
  templateUrl: './sell-used-car.component.html',
  styleUrls: ['./sell-used-car.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None,
})

export class SellUsedCarComponent implements OnInit {
  
  items: MenuItem[];
  itemsS: SelectItem[];
  activeIndex: number = 0;  
  uploadedFiles: any[] = [];
   public AddNewCarListModel = new AddNewCarListModel();
  @ViewChild('inputFile') myInputVariable: ElementRef;
  carmodelbind:string="-1";
  cities: City[];

  selectedCity: City;
  constructor(private sellusedcarService: sellusedcarService,private ip:IpServiceService,
    private location:LocationSerivceService,private toastr: ToastrService,
    private messageService: MessageService) { 
      this.cities = [
        {name: 'Select Model', code: '0'},
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
    }

  ngOnInit(): void {
     this.sellusedcarService.GetMakeList().subscribe((res)=>{
      this.AddNewCarListModel.MakeType = res; 
    }); 
    this.BindStepWizard();
    // this.getIP(); 
  }
  MovePrevious(currentindex){
    
    if(currentindex>0){
    this.activeIndex = currentindex-1;
    }
  }
  MoveNext(currentindex){
    
    if(currentindex<4){
    this.activeIndex = currentindex+1;
    }
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
  BindStepWizard(){
    this.items = [{
      label: 'Select Make',
      command: (event: any) => {
          this.activeIndex = 0;
          this.messageService.add({severity:'info', summary:'Select Make', detail: event.item.label});
      }
  },
  {
      label: 'Select Model, Varient, Color',
      command: (event: any) => {
          this.activeIndex = 1;
          this.messageService.add({severity:'info', summary:'Select Model, Varient, Color', detail: event.item.label});
      }
  },
  {
      label: 'Select Price, Year, KM Driven',
      command: (event: any) => {
          this.activeIndex = 2;
          this.messageService.add({severity:'info', summary:'Select Price, Year, KM Driven', detail: event.item.label});
      }
  },
  {
      label: 'Select Ownership, Saller Name, Contact Detail',
      command: (event: any) => {
          this.activeIndex = 3;
          this.messageService.add({severity:'info', summary:'Select Ownership, Saller Name, Contact Detail', detail: event.item.label});
      }
  },
  {
    label: 'Upload Images, Add Description',
    command: (event: any) => {
        this.activeIndex = 4;
        this.messageService.add({severity:'info', summary:'Select Ownership, Saller Name, Contact Detail', detail: event.item.label});
    }
}
];
  }
  
  
   
//     this.sellusedcarService.GetFualType().subscribe((res)=>{
//       this.AddNewCarListModel.Fuel = res; 
      
//     }); 

//     this.sellusedcarService.GetYearList().subscribe((res)=>{
//       this.AddNewCarListModel.Year = res; 
      
//     }); 
//     this.sellusedcarService.GetEngineSizeList().subscribe((res)=>{
//       this.AddNewCarListModel.enginesize = res; 
      
//     }); 
    
//     this.sellusedcarService.GetPriceList().subscribe((res)=>{
//       this.AddNewCarListModel.Price = res; 
      
//     }); 
//     this.sellusedcarService.GetConditionList().subscribe((res)=>{
//       this.AddNewCarListModel.Condition = res; 
      
//     }); 
//     this.sellusedcarService.GetTrasmissionList().subscribe((res)=>{
//       this.AddNewCarListModel.Transmission = res; 
      
//     }); 
   
//     this.sellusedcarService.GetColourList().subscribe((res)=>{
//       this.AddNewCarListModel.Color = res; 
      
//     }); 
//     this.sellusedcarService.GetBodyTypeList().subscribe((res)=>{
//       this.AddNewCarListModel.BodyType = res; 
      
//     }); 
//     this.sellusedcarService.GetCylindersList().subscribe((res)=>{
//       this.AddNewCarListModel.Cylinder = res; 
      
//     }); 
//   }
//   get f(){
//     return this.myForm.controls;
//   }
//   getIP()  
//   {  
   
//     this.sellusedcarService.GetIpAddress().subscribe((res)=>{
     
//       this.ipAddress= res.ip; 
      
//       this.sellusedcarService.GetLocationByIp(res.ip).subscribe((res)=>{
       
//         this.location=res;
//         this.locationlat=res.lat;
//         this.locationlong=res.lon;
//         this.city=res.city;
//       }); 
//     }); 
//   }  

 
//   clickMake(MakeType){
//     this.step1=false;
//     this.step2=true;
//     this.step3=false;
//     this.step4=false;
//     this.step5=false;
//     this.step6=false;
//     this.step7=false;
//     this.step8=false;
//     this.applyclassactiveMake=MakeType;
//     this.getModelList(MakeType);
//     this.myForm.patchValue({
//       make:MakeType
//     });
//   }
//   backtomake(){
//     this.step1=true;
//     this.step2=false;
//     this.step3=false;
//     this.step4=false;
//     this.step5=false;
//     this.step6=false;
//     this.step7=false;
//     this.step8=false;
//   }
  
  
//   moveNextStep3(){
//     this.step1=false;
//     this.step2=false;
//     this.step3=true;
//     this.step4=false;
//     this.step5=false;
//     this.step6=false;
//     this.step7=false;
//     this.step8=false;
//   }
//   moveNextStep2(){
//     this.step1=false;
//     this.step2=true;
//     this.step3=false;
//     this.step4=false;
//     this.step5=false;
//     this.step6=false;
//     this.step7=false;
//     this.step8=false;
//   }
//   moveNextStep4(){
//     this.step1=false;
//     this.step2=false;
//     this.step3=false;
//     this.step4=true;
//     this.step5=false;
//     this.step6=false;
//     this.step7=false;
//     this.step8=false;
//   }

//   moveNextStep5(){
//     this.step1=false;
//     this.step2=false;
//     this.step3=false;
//     this.step4=false;
//     this.step5=true;
//     this.step6=false;
//     this.step7=false;
//     this.step8=false;
//   }
//   moveNextStep6(){
//     this.step1=false;
//     this.step2=false;
//     this.step3=false;
//     this.step4=false;
//     this.step5=false;
//     this.step6=true;
//     this.step7=false;
//     this.step8=false;
//   }
//   moveNextStep7(){
//     this.step1=false;
//     this.step2=false;
//     this.step3=false;
//     this.step4=false;
//     this.step5=false;
//     this.step6=false;
//     this.step7=true;
//     this.step8=false;
//   }
//   moveNextStep8(){
//     this.step1=false;
//     this.step2=false;
//     this.step3=false;
//     this.step4=false;
//     this.step5=false;
//     this.step6=false;
//     this.step7=false;
//     this.step8=true;
//   }

//   getModelList(id){
//     this.sellusedcarService.GetModelList(id).subscribe((res)=>{
      
//       this.AddNewCarListModel.CarModel = res;
//     }); 
//   }
//   getVarientList(id){
//     this.sellusedcarService.GetVarientList(id).subscribe((res)=>{
     
//       this.AddNewCarListModel.Variant = res;
//     }); 
//   }

//   changeprefrencetype(){
//     var prefrencetype=this.myForm.controls['contactprefrencetype'].value;
//      if(prefrencetype=="Call"){
// this.PrefrenceType="Mobile Number*";
//      }
//      else if(prefrencetype=="Email"){
//       this.PrefrenceType="Email*";
//      }
//      else if(prefrencetype=="MessagingSystem"){
//        //move to contact us form
//      }
//      else if(prefrencetype=="Whatsapp"){
//       this.PrefrenceType="Whatsapp Number*";
//      }
//      else{
//       this.PrefrenceType="";
//      }
//   }
  
//   onFileChange(event,files: FileList) {
//     if (event.target.files && event.target.files[0]) {
//         var filesAmount = event.target.files.length;
     
//         for (let i = 0; i < filesAmount; i++) {
//                 var reader = new FileReader();
   
//                 reader.onload = (event:any) => {
//                   console.log(event.target.result);
//                    this.images.push(event.target.result); 
   
//                    this.myForm.patchValue({
//                       fileSource: this.images
//                    })
//                 }
              
//                 this.selectedFiles.push(files[i]);
//                 reader.readAsDataURL(event.target.files[i]);
//         }
//     }
//   }
 
//   emptyImagesArray(){
//     this.images=[];
//     this.myInputVariable.nativeElement.value = '';
    
//   }

//   checkvalidInput = function (): string {
//     debugger;
//     const make=this.myForm.controls['make'].value;
//     const year=this.myForm.controls['year'].value;
//     const model=this.myForm.controls['model'].value;
//     const varient=this.myForm.controls['varient'].value;
//     const condition=this.myForm.controls['condition'].value;
//     const price=this.myForm.controls['price'].value;
//     const kilometer=this.myForm.controls['kilometer'].value;
//     const transmission=this.myForm.controls['transmission'].value;
//     const fualType=this.myForm.controls['fualtype'].value;
//     const drivetrain=this.myForm.controls['drivetrain'].value;
//     const cylinder=this.myForm.controls['cylinder'].value;
//     const bodytype=this.myForm.controls['bodytype'].value;
//     const aircondition=this.myForm.controls['aircondition'].value;
//     const auctiongrade=this.myForm.controls['auctiongrade'].value;

//     const color= this.myForm.controls['color'].value;
//     const enginesize= this.myForm.controls['enginesize'].value;
//     const vin= this.myForm.controls['vin'].value;
//     const regnumber= this.myForm.controls['regnumber'].value;
//     const odometer= this.myForm.controls['odometer'].value;
   
//     const file= this.selectedFiles;
//     const description= this.myForm.controls['description'].value;
//     const contactprefrencetype= this.myForm.controls['contactprefrencetype'].value;
//     const contactprefrencedetail= this.myForm.controls['contactprefrencedetail'].value;

//     var formValidationSummary="<ul>";
//     if(make==""){
//       formValidationSummary=formValidationSummary+"<li>Make is required !</li>";
//     }
//     if(year==""){
//       formValidationSummary=formValidationSummary+"<li>year is required !</li>";
//     }
//     if(model==""){
//       formValidationSummary=formValidationSummary+"<li>model is required !</li>";
//     }
//     if(condition==""){
//       formValidationSummary=formValidationSummary+"<li>condition is required !</li>";
//     }
//     if(price==""){
//       formValidationSummary=formValidationSummary+"<li>price is required !</li>";
//     }
//     if(kilometer==""){
//       formValidationSummary=formValidationSummary+"<li>kilometer is required !</li>";
//     }
//     if(transmission==""){
//       formValidationSummary=formValidationSummary+"<li>transmission is required !</li>";
//     }
//     if(fualType==""){
//       formValidationSummary=formValidationSummary+"<li>fualType is required !</li>";
//     }
//     if(drivetrain==""){
//       formValidationSummary=formValidationSummary+"<li>drivetrain is required !</li>";
//     }
//     if(cylinder==""){
//       formValidationSummary=formValidationSummary+"<li>cylinder is required !</li>";
//     }
//     if(bodytype==""){
//       formValidationSummary=formValidationSummary+"<li>bodytype is required !</li>";
//     }
//     if(aircondition==""){
//       formValidationSummary=formValidationSummary+"<li>air condition is required !</li>";
//     }
//     if(auctiongrade==""){
//       formValidationSummary=formValidationSummary+"<li>auction grade is required !</li>";
//     }
//     if(color==""){
//       formValidationSummary=formValidationSummary+"<li>color is required !</li>";
//     }
//     if(enginesize==""){
//       formValidationSummary=formValidationSummary+"<li>engine size is required !</li>";
//     }
//     if(vin==""){
//       formValidationSummary=formValidationSummary+"<li>vin is required !</li>";
//     }
//     if(regnumber==""){
//       formValidationSummary=formValidationSummary+"<li>reg number is required !</li>";
//     }
//     if(odometer==""){
//       formValidationSummary=formValidationSummary+"<li>odometer is required !</li>";
//     }
//     if(file.length==0){
//       formValidationSummary=formValidationSummary+"<li>Vehicle Images is required !</li>";
//     }
//     if(description==""){
//       formValidationSummary=formValidationSummary+"<li>description is required !</li>";
//     }
//     if(contactprefrencetype==""){
//       formValidationSummary=formValidationSummary+"<li>contact prefrence type is required !</li>";
//     }
//     if(contactprefrencedetail==""){
//       formValidationSummary=formValidationSummary+"<li>contact prefrence detail is required !</li>";
//     }

//     formValidationSummary=formValidationSummary+"</ul>";
//      return formValidationSummary;
//   }
//   submit(){
//    var isValid=this.checkvalidInput();
   
// if(isValid==""){
//     this.addvehicleForm.MakeId=this.myForm.controls['make'].value;
//     this.addvehicleForm.YearId=this.myForm.controls['year'].value;
//     this.addvehicleForm.ModelId=this.myForm.controls['model'].value;
//     this.addvehicleForm.Variant=this.myForm.controls['varient'].value;
//     this.addvehicleForm.ConditionId=this.myForm.controls['condition'].value;
//     this.addvehicleForm.PriceId=this.myForm.controls['price'].value;
//     this.addvehicleForm.Kilometer=this.myForm.controls['kilometer'].value;
//     this.addvehicleForm.TransmissionId=this.myForm.controls['transmission'].value;
//     this.addvehicleForm.FuelTypeId=this.myForm.controls['fualtype'].value;
//     this.addvehicleForm.DriveTrain=this.myForm.controls['drivetrain'].value;
//     this.addvehicleForm.CylindersId=this.myForm.controls['cylinder'].value;
//     this.addvehicleForm.BodyTypeId=this.myForm.controls['bodytype'].value;
//     this.addvehicleForm.AirConditioning=this.myForm.controls['aircondition'].value;
//     this.addvehicleForm.AuctionGrade=this.myForm.controls['auctiongrade'].value;
//     this.addvehicleForm.lat=this.locationlat; 
//     this.addvehicleForm.long=this.locationlong;
//     this.addvehicleForm.city=this.city;  
//     this.addvehicleForm.ColourId= this.myForm.controls['color'].value;
//     this.addvehicleForm.enginesize= this.myForm.controls['enginesize'].value;
//     this.addvehicleForm.vin= this.myForm.controls['vin'].value;
//    this.addvehicleForm.regnumber= this.myForm.controls['regnumber'].value;
//    this.addvehicleForm.odometer= this.myForm.controls['odometer'].value;
//     this.addvehicleForm.VehicleImage= this.selectedFiles;
//     this.addvehicleForm.description= this.myForm.controls['description'].value;
//     this.addvehicleForm.Contactprefrencetype= this.myForm.controls['contactprefrencetype'].value;
//     this.addvehicleForm.Contactprefrencedetail= this.myForm.controls['contactprefrencedetail'].value;
//     this.sellusedcarService.AddUpdateNewVehicle(this.addvehicleForm).subscribe((res)=>{
//       this.toastr.success('Vehicle successfully Saved!');
    
//    });
//   } 
//   else{
//     this.BindValidationSummary=isValid;
//     $("#myModal").modal('show');
//     var element = document.getElementById('element');
//   }
//   }

 

// sendModal(): void {
//   //do something here
//   this.hideModal();
// }
// hideModal():void {
//   document.getElementById('close-modal').click();
// }
}
