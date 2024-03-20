import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CadastroServiceService } from '../../service/cadastro-service.service';
@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  formCliente: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroServiceService
  ) {
    this.formCliente = this.formBuilder.group({
      nome: [''],
      email: [''],
      telefone: [''],
      endereco: [''],
      senha: [''],
    });
  }

  onSubmit() {
    if (this.formCliente.valid) {
      console.log(this.formCliente.value);
      this.cadastroService.cadastrarCliente(this.formCliente.value).subscribe({
        //melhorar esse tratamento
        next: (res) => console.log('Cliente cadastrado com sucesso!', res),
        error: (err) => console.log('Falha ao cadastrar cliente', err),
      });

      
      this.formCliente.reset({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        senha: '',
      });
    }
  }
}
