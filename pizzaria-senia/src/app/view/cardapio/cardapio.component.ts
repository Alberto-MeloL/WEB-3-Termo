import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../../controller/service/pedidos/pedido.service';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css',
})
export class CardapioComponent {
constructor(public pedidoService: PedidoService){}


}
