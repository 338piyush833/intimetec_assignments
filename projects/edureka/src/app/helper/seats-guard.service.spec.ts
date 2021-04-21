import { TestBed } from '@angular/core/testing';

import { SeatsGuardService } from './seats-guard.service';

describe('SeatsGuardService', () => {
  let service: SeatsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
