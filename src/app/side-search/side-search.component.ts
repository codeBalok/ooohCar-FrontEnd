import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home/home.service'
import {SideSearchListModel,SideSearchModel} from '../shared/models/SideSearchModel';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
  
@Component({
  selector: 'app-side-search',
  templateUrl: './side-search.component.html',
  styleUrls: ['./side-search.component.scss']
})
export class SideSearchComponent implements OnInit {
  public SideSearchListModel = new SideSearchListModel();
  public IsExpandMake : string = '';
  public modelClickedName:string='';
  public IsModelSelected:boolean=false;
  public IsVarientEnable:boolean=false;
  closeResult: string;
  constructor(private homeService: HomeService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.homeService.GetMakeListWithModalCount().subscribe((res)=>{ 
      this.SideSearchListModel.Make = res;
      console.log(this.SideSearchListModel.Make);
    });    
  }
 

  SearchMake(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
  }

}
