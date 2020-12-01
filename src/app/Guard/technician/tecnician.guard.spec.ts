import { TestBed } from '@angular/core/testing';

import { TecnicianGuard } from './tecnician.guard';

describe('TecnicianGuard', () => {
  let guard: TecnicianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TecnicianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
