import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pedidos-cliente',
    standalone: true,
    templateUrl: './pedidos-cliente.component.html',
    styleUrl: './pedidos-cliente.component.css',
    imports: [HeaderComponent, CommonModule]
})
export class PedidosClienteComponent {


    // fazer um for para animar o texto, add caracter por vez
}
