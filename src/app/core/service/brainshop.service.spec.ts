import { TestBed } from '@angular/core/testing';

import { BrainshopService } from './brainshop.service';

describe('BrainshopService', () => {
  let service: BrainshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrainshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
