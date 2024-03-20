import { TestBed } from '@angular/core/testing';

import { ValidacaoCadastroService } from './validacao-cadastro.service';

describe('ValidacaoCadastroService', () => {
  let service: ValidacaoCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacaoCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
