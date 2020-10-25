import { TestBed } from '@angular/core/testing';

import { ColetorService } from './coletor.service';

describe('ColetorService', () => {
  let service: ColetorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColetorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
