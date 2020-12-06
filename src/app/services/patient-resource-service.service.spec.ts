import { TestBed } from '@angular/core/testing';

import { PatientResourceServiceService } from './patient-resource-service.service';

describe('PatientResourceServiceService', () => {
  let service: PatientResourceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientResourceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
