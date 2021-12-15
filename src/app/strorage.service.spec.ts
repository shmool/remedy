import { TestBed } from '@angular/core/testing';

import { StrorageService } from './strorage.service';

describe('StrorageService', () => {
  let service: StrorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
