import { TestBed } from '@angular/core/testing';

import { BrothersService } from './brothers.service';

describe('BrothersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrothersService = TestBed.get(BrothersService);
    expect(service).toBeTruthy();
  });
});
