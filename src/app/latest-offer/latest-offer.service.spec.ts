import { TestBed } from '@angular/core/testing';

import { LatestOfferService } from './latest-offer.service';

describe('LatestOfferService', () => {
  let service: LatestOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
