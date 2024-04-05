import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RealizarPedidoService {

  
  private url = 'http:localhost:3000/realizar-pedido';

  constructor(private http: HttpClient) {}

  //método para realizar pedido

  realizarPedido(pedidoCliente: unknown): Observable<unknown> {
    return this.http.post(this.url, pedidoCliente);
  }
}
