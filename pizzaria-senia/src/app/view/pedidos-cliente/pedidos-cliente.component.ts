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
    frases = ['Há anguns clicks', 'Do melhor', 'Sabor!'];
    fraseAtual?: string;
    contador: number = 0;



    //método para mudar as frases
    mudarFrases() {
        setTimeout(() => {

            this.fraseAtual = this.frases[this.contador];
        }, 2000)
        this.contador++;
console.log(this.contador)
}
    }
