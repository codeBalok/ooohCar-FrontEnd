import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LatestOfferComponent } from './latest-offer.component';

describe('LatestOfferComponent', () => {
  let component: LatestOfferComponent;
  let fixture: ComponentFixture<LatestOfferComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
