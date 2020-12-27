import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedProgramsComponent } from './certified-programs.component';

describe('CertifiedProgramsComponent', () => {
  let component: CertifiedProgramsComponent;
  let fixture: ComponentFixture<CertifiedProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifiedProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifiedProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
