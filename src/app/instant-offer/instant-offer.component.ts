import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-instant-offer',
  templateUrl: './instant-offer.component.html',
  styleUrls: ['./instant-offer.component.scss']
})
export class InstantOfferComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  faqClick(){
    this.router.navigateByUrl("/faq");
  }
}
