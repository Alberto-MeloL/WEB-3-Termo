import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { PromocoesSemanalComponent } from './view/promocoes-semanal/promocoes-semanal.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroServiceService } from './controller/service/cadastro/cadastro-service.service';
import { LoginServiceService } from './controller/service/login/login-service.service';
import { AvaliacoesServiceService } from './controller/service/avaliacoes/avaliacoes-service.service';
// import { AuthService } from './controller/service/auth/auth.service';
import { PedidoService } from './controller/service/pedidos/pedido.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule, HeaderComponent, FooterComponent, PromocoesSemanalComponent],
  templateUrl: './app.component.html',
  providers: [CadastroServiceService, LoginServiceService, AvaliacoesServiceService, PedidoService],//porque colocar isso
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pizzaria-senia';
}
