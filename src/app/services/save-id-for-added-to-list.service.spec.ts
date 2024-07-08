import { TestBed } from '@angular/core/testing';

import { SaveIdForAddedToListService } from './save-id-for-added-to-list.service';

describe('SaveIdForAddedToListService', () => {
  let service: SaveIdForAddedToListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveIdForAddedToListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
