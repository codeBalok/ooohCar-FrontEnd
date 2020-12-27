import { TestBed } from '@angular/core/testing';

import { NewCarsService } from './new-cars.service';

describe('NewCarsService', () => {
  let service: NewCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
