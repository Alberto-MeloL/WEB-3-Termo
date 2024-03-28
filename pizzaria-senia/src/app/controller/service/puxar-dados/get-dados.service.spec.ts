import { TestBed } from '@angular/core/testing';

import { GetDadosService } from './get-dados.service';

describe('GetDadosService', () => {
  let service: GetDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
