import { TestBed } from '@angular/core/testing';

import { GetMockDataService } from './get-mock-data.service';

describe('GetMockDataService', () => {
  let service: GetMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
