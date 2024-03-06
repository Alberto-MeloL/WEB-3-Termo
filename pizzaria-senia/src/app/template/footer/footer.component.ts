import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  
  getAvaliacao(dataAvaliacao: number){//recebendo o atributa data-avaliacao
    const estrelaSelecionada = document.querySelector('.estrela-icone');
    const getDataAvaliacao = estrelaSelecionada?.getAttribute('data-avaliacao')

    
  
  
  
  }
}
