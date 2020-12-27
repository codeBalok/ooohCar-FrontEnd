import { TestBed } from '@angular/core/testing';

import { FeatureProductService } from './feature-product.service';

describe('FeatureProductService', () => {
  let service: FeatureProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
