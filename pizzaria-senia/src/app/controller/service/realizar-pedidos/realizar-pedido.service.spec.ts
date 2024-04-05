import { TestBed } from '@angular/core/testing';

import { RealizarPedidoService } from './realizar-pedido.service';

describe('RealizarPedidoService', () => {
  let service: RealizarPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealizarPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
