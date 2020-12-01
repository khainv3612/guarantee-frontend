import { TestBed } from '@angular/core/testing';

import { SalerGuard } from './saler.guard';

describe('SalerGuard', () => {
  let guard: SalerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SalerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
