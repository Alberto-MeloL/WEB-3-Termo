import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { LoginServiceService } from '../../controller/service/login/login-service.service';

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
  ) {

    this.formCliente = this.formBuilder.group({
email: [''],
senha: ['']
    });
  }

  //método login
  onSubmit(event: Event) {
    event.preventDefault()
    //esses parametros estão sendo passados para o service
    const { email, senha } = this.formCliente.value;
    this.loginService.realizarLogin(email, senha).subscribe({
      //respostas
      next: (res) => console.log('Login realizado com sucesso!', res),
      error: (err) => console.log('Falha ao realizar login', err),
    });
  }
}
