import { TestBed } from '@angular/core/testing';

import { SsServiceLoadingService } from './ss-service.loading.service';

describe('SsServiceLoadingService', () => {
  let service: SsServiceLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsServiceLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
