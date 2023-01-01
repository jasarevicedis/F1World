import { TestBed } from '@angular/core/testing';

import { F1apiService } from './f1api.service';

describe('F1apiService', () => {
  let service: F1apiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(F1apiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
