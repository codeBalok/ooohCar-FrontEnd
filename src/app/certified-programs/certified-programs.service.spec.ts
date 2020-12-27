import { TestBed } from '@angular/core/testing';

import { CertifiedProgramsService } from './certified-programs.service';

describe('CertifiedProgramsService', () => {
  let service: CertifiedProgramsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertifiedProgramsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
