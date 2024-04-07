import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { HeaderDeslogadoComponent } from '../../template/header-deslogado/header-deslogado.component';

@Component({
  selector: 'app-home-deslogado',
  standalone: true,
  imports: [CadastroComponent, HeaderDeslogadoComponent],
  templateUrl: './home-deslogado.component.html',
  styleUrl: './home-deslogado.component.css'
})
export class HomeDeslogadoComponent {

}
