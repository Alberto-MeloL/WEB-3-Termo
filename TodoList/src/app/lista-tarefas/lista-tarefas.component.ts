import { Component } from '@angular/core';
import { Tarefas } from '../inteface/Tarefas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'], //diferenças []
})
export class ListaTarefasComponent {
  mostrar: boolean = false;
  mostrarDivNovaTarefa(): void{
    this.mostrar = !this.mostrar;
      }
  tarefas: Tarefas[] = [
    { nome: 'alberto', dataInicio: 15, dataTermino: 14, observacoes: 'hdhd' },
  ];

 
}
