import { TestBed } from '@angular/core/testing';

import { MovieAllService } from './movie-all.service';

describe('MovieAllService', () => {
  let service: MovieAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
