import { Component } from '@angular/core';
import { Tarefas } from '../interface/Tarefas';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { CadastroTarefaService } from '../service/cadastroTarefas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'], //diferenças []
})
export class ListaTarefasComponent implements OnInit {
 
  nome: string = '';
  observacoes: string = '';
  tarefas: Tarefas[] = [];

  menuHb: boolean = false
  mostrar: boolean = false;
  mostrarDivNovaTarefa(): void {
    this.mostrar = !this.mostrar;
  }

  menuHbTrue(): void{
    if (window.innerWidth < 1200) { //verificando a largura
      this.menuHb = true
      console.log(`O menuHb é: ${this.menuHb}`)

    }
    }
  

  constructor(private cadastroTarefaService: CadastroTarefaService) {
    this.getTarefas();
  }
  ngOnInit(): void { }

  getTarefas(): void {
    this.cadastroTarefaService.getTodasTarefas().subscribe((tarefas) => (this.tarefas = tarefas));
  }

  adicionarTarefa(): void {
    const dadosForm = {
      nome: this.nome,
      observacoes: this.observacoes
    }

    this.cadastroTarefaService.cadastroTarefas(dadosForm).subscribe(novaTarefa => {
      this.tarefas.push(novaTarefa);
      console.log(this.tarefas)
      this.nome = '';
      this.observacoes = '';
    })
  }

}