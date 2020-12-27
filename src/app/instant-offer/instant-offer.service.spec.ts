import { TestBed } from '@angular/core/testing';

import { InstantOfferService } from './instant-offer.service';

describe('InstantOfferService', () => {
  let service: InstantOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstantOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
