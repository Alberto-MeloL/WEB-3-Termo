import { TestBed } from '@angular/core/testing';

import { AvaliacoesServiceService } from './avaliacoes-service.service';

describe('AvaliacoesServiceService', () => {
  let service: AvaliacoesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliacoesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
