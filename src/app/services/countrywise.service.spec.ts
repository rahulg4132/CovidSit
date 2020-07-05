import { TestBed } from '@angular/core/testing';

import { CountrywiseService } from './countrywise.service';

describe('CountrywiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountrywiseService = TestBed.get(CountrywiseService);
    expect(service).toBeTruthy();
  });
});
