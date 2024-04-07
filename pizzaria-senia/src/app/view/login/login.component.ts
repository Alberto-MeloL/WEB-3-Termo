import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { LoginServiceService } from '../../controller/service/login/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formCliente: FormGroup; //<---
  //corrigit o nome do serviço
  constructor(
    private loginService: LoginServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formCliente = this.formBuilder.group({
      email: [''],
      senha: [''],
    });
  }

  //método login
  onSubmit(event: Event) {
    event.preventDefault();
    //esses parametros estão sendo passados para o service
    const { email, senha } = this.formCliente.value;
    this.loginService.realizarLogin(email, senha).subscribe({
      //respostas
      next: (res) => {
        this.router.navigate(['/home']);//lembrar de fazer rotas coringa, e emitir uma mensagem
        console.log('Login realizado com sucesso!', res);
      },
      error: (err) => {
        console.log('Falha ao realizar login', err);
      },
    });
  }
}
