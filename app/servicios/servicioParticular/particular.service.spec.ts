import { TestBed } from '@angular/core/testing';

import { ParticularService } from './particular.service';

describe('ParticularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticularService = TestBed.get(ParticularService);
    expect(service).toBeTruthy();
  });
});
