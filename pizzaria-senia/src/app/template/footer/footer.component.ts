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
  estrelas = [1,2,3,4,5]; //representando as estrelas
  avaliacaoSelecionada = 0; //ponto inicial

  getAvaliacao(index: number):void {
    this.avaliacaoSelecionada = index; //qual foi selecionada
    console.log('Indíce:', index)

//adicionar +1 pois o array começa em zero ou seja se for adicionada a primeira estrela, que é 0 
//como esta acrescentando mais 1, a estrala será igual a 1, e assim por diante
    this.avaliacaoService.enviarAvaliacao(index + 1).subscribe(

      (resposta) => { console.log("Resposta sendo enviada", resposta)},
      (error) => {console.error("Opa, ocorreu um erro", error)}
    )



    
  
  
  }
}
