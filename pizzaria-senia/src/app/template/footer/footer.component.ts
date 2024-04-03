import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacoesServiceService } from '../../controller/service/avaliacoes/avaliacoes-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})

export class FooterComponent {

  constructor(private avaliacaoService: AvaliacoesServiceService){}//injeção de dependências
  // estrelas = [1,2,3,4,5]; //representando as estrelas
  avaliacaoSelecionada = 0; //ou seja nenhuma
  // avaliacao = document.querySelectorAll('.estrela-icone')

  getAvaliacao(index: number):void {
    this.avaliacaoSelecionada = index; //qual foi selecionada
    console.log('Indíce:', index)

    // if (this.avaliacaoSelecionada != -1) {
    //   this.estrelas[index].
    // }
  
  }
}
