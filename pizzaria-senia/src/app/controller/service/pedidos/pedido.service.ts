import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private url = 'http:localhost:3000/meu-pedido';
  quantidade: number = 0; //aqui é a quantidade de produtos a ser add no pedido

  constructor(private http: HttpClient) {}

  //método para realizar pedido

  realizarPedido(pedidoCliente: unknown): Observable<unknown> {
    return this.http.post(this.url, pedidoCliente);
  }


  //método para adicionar quantidade
  addQuantidade() {
    this.quantidade++;
    console.log('Adicionando qanridade', this.quantidade);
  }

  //método para qremover quantidade
  removerQuantidade() {
    if (this.quantidade > 0) {
      //evita ter números negativos
      this.quantidade--;
    }
    console.log('Removendo quantidade', this.quantidade);
  }
}
