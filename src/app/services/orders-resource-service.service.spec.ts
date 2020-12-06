import { TestBed } from '@angular/core/testing';

import { OrdersResourceServiceService } from './orders-resource-service.service';

describe('OrdersResourceServiceService', () => {
  let service: OrdersResourceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersResourceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
