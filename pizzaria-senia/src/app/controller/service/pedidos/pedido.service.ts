import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

quantidade: number = 0;//aqui é a quantidade de produtos a ser add no pedido

//método para adicionar quantidade
addQuantidade(){
  this.quantidade++;
  console.log("Adicionando qanridade", this.quantidade);
}

//método para qremover quantidade
removerQuantidade(){
  if(this.quantidade > 0){//evita ter números negativos
    this.quantidade--;
  }
  console.log("Removendo quantidade", this.quantidade);
  
}
}
