import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceSectionComponent } from './service-section.component';

describe('ServiceSectionComponent', () => {
  let component: ServiceSectionComponent;
  let fixture: ComponentFixture<ServiceSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
