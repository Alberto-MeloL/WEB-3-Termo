    import { Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { LoginComponent } from './view/login/login.component';

export const routes: Routes = [
    {path: 'cadastro', component: CadastroComponent},
    {path: 'login', component: LoginComponent},
    
];
