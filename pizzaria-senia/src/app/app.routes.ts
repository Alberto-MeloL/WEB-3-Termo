import { Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { LoginComponent } from './view/login/login.component';
import { CardapioComponent } from './view/cardapio/cardapio.component';
import { HomeComponent } from './view/home/home.component';
import { HomeDeslogadoComponent } from './view/home-deslogado/home-deslogado.component';
import { InformacoesComponent } from './view/informacoes/informacoes.component';
import { PedidosClienteComponent } from './view/pedidos-cliente/pedidos-cliente.component';
// import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeDeslogadoComponent },
  { path: 'home', component: HomeComponent, },
  { path: 'cadastro', component: CadastroComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'cardapio', component: CardapioComponent, },
  {
    path: 'informacoes',
    component: InformacoesComponent,
  },
  {
    path: 'meu-pedido',
    component: PedidosClienteComponent,

  }
];
