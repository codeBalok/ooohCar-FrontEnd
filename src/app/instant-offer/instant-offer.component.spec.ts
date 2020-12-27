import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantOfferComponent } from './instant-offer.component';

describe('InstantOfferComponent', () => {
  let component: InstantOfferComponent;
  let fixture: ComponentFixture<InstantOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
