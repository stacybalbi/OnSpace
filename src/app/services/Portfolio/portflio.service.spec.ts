import { TestBed } from '@angular/core/testing';

import { PortfolioService } from './portafolio.service';

describe('PortafolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
