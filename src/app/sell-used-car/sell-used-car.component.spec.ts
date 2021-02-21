import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellUsedCarComponent } from './sell-used-car.component';

describe('SellUsedCarComponent', () => {
  let component: SellUsedCarComponent;
  let fixture: ComponentFixture<SellUsedCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellUsedCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellUsedCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
