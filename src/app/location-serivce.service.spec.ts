import { TestBed } from '@angular/core/testing';

import { LocationSerivceService } from './location-serivce.service';

describe('LocationSerivceService', () => {
  let service: LocationSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
