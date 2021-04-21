import { TestBed } from '@angular/core/testing';

import { PassengerGuardService } from './passenger-guard.service';

describe('PassengerGuardService', () => {
  let service: PassengerGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
