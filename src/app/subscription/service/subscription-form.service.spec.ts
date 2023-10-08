import { TestBed } from '@angular/core/testing';

import { SubscriptionFormService } from './subscription-form.service';

describe('SubscriptionFormService', () => {
  let service: SubscriptionFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
