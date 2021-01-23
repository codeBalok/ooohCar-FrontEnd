import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Observable } from 'rxjs';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/account/account.service';
import { CommonService } from 'src/app/Common/CommonService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket>;
  currentUser$: Observable<IUser>;
  loginUserDetail: any;
  constructor(private basketService: BasketService, 
    private accountService: AccountService,
    private _CommonService: CommonService,) { }

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;
    this.loginUserDetail = this._CommonService.getLoggedInUser();  
  }

  logout() {
    
    this.accountService.logout();
    this.ngOnInit();
  }

  

}
