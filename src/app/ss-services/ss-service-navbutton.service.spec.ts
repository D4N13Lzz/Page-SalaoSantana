import { TestBed } from '@angular/core/testing';

import { SsServiceNavbuttonService } from './ss-service-navbutton.service';

describe('SsServiceNavbuttonService', () => {
  let service: SsServiceNavbuttonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsServiceNavbuttonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
