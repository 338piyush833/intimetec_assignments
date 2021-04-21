import { TestBed } from '@angular/core/testing';

import { BusesGuardService } from './buses-guard.service';

describe('BusesGuardService', () => {
  let service: BusesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
