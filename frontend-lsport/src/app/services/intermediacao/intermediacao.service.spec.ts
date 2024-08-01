import { TestBed } from '@angular/core/testing';

import { IntermediacaoService } from './intermediacao.service';

describe('IntermediacaoService', () => {
  let service: IntermediacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntermediacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
