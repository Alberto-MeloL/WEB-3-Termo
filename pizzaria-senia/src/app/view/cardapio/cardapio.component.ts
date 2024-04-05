import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealizarPedidoService } from '../../controller/service/realizar-pedidos/realizar-pedido.service';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css',
})
export class CardapioComponent {

  constructor(
    private realizarPedidoService: RealizarPedidoService,
  ) {

  }

}
