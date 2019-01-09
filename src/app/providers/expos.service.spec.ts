import { TestBed } from '@angular/core/testing';

import { ExposService } from './expos.service';

describe('ExposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExposService = TestBed.get(ExposService);
    expect(service).toBeTruthy();
  });
});
