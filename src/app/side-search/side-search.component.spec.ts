import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SideSearchComponent } from './side-search.component';

describe('SideSearchComponent', () => {
  let component: SideSearchComponent;
  let fixture: ComponentFixture<SideSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
