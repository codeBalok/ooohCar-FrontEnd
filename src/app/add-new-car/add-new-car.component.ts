import { Component, OnInit, DebugElement } from '@angular/core';
import {AddNewCarService} from './add-new-car.service';
import {AddNewCarListModel} from '../shared/models/AddNewCarModel';
import {SearchListModel,SearchModel} from '../shared/models/SearchListModel';
import {HomeService} from '../home/home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addvehicleForm } from '../shared/models/AddNewCarModel';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({

  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss']
})
export class AddNewCarComponent implements OnInit {
  public addvehicleForm = new addvehicleForm();
  selectedFile: File;
  colorlist:[];
  addvehicleFormVariable: FormGroup;
  submitted = false;
  ColorSelectedValue:any;
  keyword = 'name';
  showColorErrorMessage = false;
  previewPhoto: any;

  public searchListModel = new SearchListModel();
  public AddNewCarListModel = new AddNewCarListModel();

  constructor(private addnewcarService: AddNewCarService,
    private homeService: HomeService, private formBuilder: FormBuilder,private imageCompress: NgxImageCompressService) { }

  ngOnInit(): void {
    this.addnewcarService.GetBodyTypeList().subscribe((res)=>{
      this.AddNewCarListModel.BodyType = res;
    });  
    this.homeService.GetMakeList().subscribe((res)=>{
      this.AddNewCarListModel.MakeType = res;
    }); 
   
    this.homeService.GetYearList().subscribe((res)=>{
      this.AddNewCarListModel.Year = res;
    }); 
    this.homeService.GetYearList().subscribe((res)=>{
      this.AddNewCarListModel.Year = res;
    });  
    this.addnewcarService.GetConditionList().subscribe((res)=>{
      this.AddNewCarListModel.Condition = res;
    }); 
    this.addnewcarService.GetPriceList().subscribe((res)=>{
      this.AddNewCarListModel.Price = res;
    });
    this.addnewcarService.GetTransmissionList().subscribe((res)=>{
      this.AddNewCarListModel.Transmission = res;
    });
    this.addnewcarService.GetFualTypeList().subscribe((res)=>{
      this.AddNewCarListModel.Fuel = res;
    }); 
    this.addnewcarService.GetCylindersList().subscribe((res)=>{
      this.AddNewCarListModel.Cylinder = res;
    });  
   
    this.homeService.GetLocationList().subscribe((res)=>{
     
      this.AddNewCarListModel.Location = res;
    });  
    this.addnewcarService.GetColorList().subscribe((res)=>{
     
      this.colorlist=res;
    });  

    this.addvehicleFormVariable = this.formBuilder.group({
      MakeId: ['', Validators.required],
      YearId: ['', Validators.required],
      ModelId: ['', Validators.required],
      Variant: ['', Validators.required],
      ConditionId: ['', Validators.required],
      PriceId: ['', Validators.required],
      Kilometer: ['', Validators.required],
      TransmissionId: ['', Validators.required],
      FuelTypeId: ['', Validators.required],
      DriveTrain: ['', Validators.required],
      CylindersId: ['', Validators.required],
      BodyTypeId: ['', Validators.required],   
      AirConditioning: ['', Validators.required],
      AuctionGrade: ['', Validators.required],
      LocationId: ['', Validators.required],   
     
  });
  }

  get f() { return this.addvehicleFormVariable.controls; }


  onSubmit() {
    debugger;
    this.submitted = true;
    if(!this.ColorSelectedValue){
      
     this.showColorErrorMessage = true;
   }
   else
   {
    this.showColorErrorMessage = false;
   }
    if (this.addvehicleFormVariable.invalid) {
        return;
    }
    
    this.addvehicleForm.MakeId=this.addvehicleFormVariable.controls['MakeId'].value;
    this.addvehicleForm.YearId=this.addvehicleFormVariable.controls['YearId'].value;
    this.addvehicleForm.ModelId=this.addvehicleFormVariable.controls['ModelId'].value;
    this.addvehicleForm.Variant=this.addvehicleFormVariable.controls['Variant'].value;
    this.addvehicleForm.ConditionId=this.addvehicleFormVariable.controls['ConditionId'].value;
    this.addvehicleForm.PriceId=this.addvehicleFormVariable.controls['PriceId'].value;
    this.addvehicleForm.Kilometer=this.addvehicleFormVariable.controls['Kilometer'].value;
    this.addvehicleForm.TransmissionId=this.addvehicleFormVariable.controls['TransmissionId'].value;
    this.addvehicleForm.FuelTypeId=this.addvehicleFormVariable.controls['FuelTypeId'].value;
    this.addvehicleForm.DriveTrain=this.addvehicleFormVariable.controls['DriveTrain'].value;
    this.addvehicleForm.CylindersId=this.addvehicleFormVariable.controls['CylindersId'].value;
    this.addvehicleForm.BodyTypeId=this.addvehicleFormVariable.controls['BodyTypeId'].value;
    this.addvehicleForm.AirConditioning=this.addvehicleFormVariable.controls['AirConditioning'].value;
    this.addvehicleForm.AuctionGrade=this.addvehicleFormVariable.controls['AuctionGrade'].value;
    this.addvehicleForm.LocationId=this.addvehicleFormVariable.controls['LocationId'].value;
    this.addvehicleForm.ColourId= this.ColorSelectedValue.id.toString();
   debugger;
    this.addnewcarService.AddUpdateNewVehicle(this.addvehicleForm).subscribe((res)=>{
       console.log(res);  
    }); 
}






  selectEvent(item) {
    this.ColorSelectedValue=item;
  
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.

    if(!this.ColorSelectedValue){
      
      this.showColorErrorMessage = true;
    }
    else
    {
     this.showColorErrorMessage = false;
    }
  }

  onFocused(e) {
    // do something
    if(!this.ColorSelectedValue){
      
      this.showColorErrorMessage = true;
    }
    else
    {
     this.showColorErrorMessage = false;
    }
  }
  getModelList(id){
    this.homeService.GetModelList(id).subscribe((res)=>{
      this.AddNewCarListModel.CarModel = res;
    }); 
  }
  
  getVariantList(id){
    debugger;
    this.addnewcarService.GetVarientList(id).subscribe((res)=>{
      this.AddNewCarListModel.Variant = res;
    }); 
    
  }




  public onSelectedFile(event) {
    this.selectedFile = <File>event.target.files[0];
    if (this.selectedFile) {
        let extension = this.selectedFile.name.split('.').pop();

        if (extension.toLowerCase() != 'png' && extension.toLowerCase() != 'jpg' && extension.toLowerCase() != 'jpeg') {
            alert("Please upload valid image.");
            return;
        }
        this.addvehicleForm.VehicleImage = this.selectedFile;
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(this.selectedFile);

    }
} 

_handleReaderLoaded(readerEvt) {
  this.compressFile(readerEvt.target.result, this.addvehicleForm.VehicleImage.name);
}
compressFile(image, fileName) {
  var orientation = -1;
  this.imageCompress.compressFile(image, orientation, 50, 50).then(
      result => {
          this.previewPhoto = result;
          this.addvehicleForm.VehicleImage = this.dataURLtoFile(result, fileName);
      });
}

dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

  while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

}
