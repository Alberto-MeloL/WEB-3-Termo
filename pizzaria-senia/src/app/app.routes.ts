import { Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { LoginComponent } from './view/login/login.component';
import { CardapioComponent } from './view/cardapio/cardapio.component';
import { HomeComponent } from './view/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  {path: 'cardapio', component: CardapioComponent},
  //{path: '', component: },
];
