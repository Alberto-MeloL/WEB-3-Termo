import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroServiceService } from '../../controller/service/cadastro/cadastro-service.service';//serviço para realizar o cadastro
import { ValidacaoCadastroService } from '../../controller/validations/validacao-cadastro.service';//serviço para validar campos
@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  formCliente: FormGroup;
  mensagemValidacao?: string;//pode ou não, ter "valor"

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroServiceService,
    private validarCadastro: ValidacaoCadastroService,
  ) {
    this.formCliente = this.formBuilder.group({
      nome: [''],
      email: [''],
      telefone: [''],
      endereco: [''],
      senha: [''],
    });
  }

//validar campos antes de enviar
validarCampos(campos:unknown):void{

  const resultadoValidacao = this.validarCadastro.validarCadastro(campos);

  if (!resultadoValidacao.sucesso) {

    this.mensagemValidacao = resultadoValidacao.mensagem;
    console.log("Resultado da validação",this.mensagemValidacao);
    throw new Error("Erro")//lança o erro, e impede o envio ! !!
  }
}

//otimizar futuramente os tratamentos de erros
  onSubmit() {
    console.log("Validando campos...");
    this.validarCampos(this.formCliente.value);
    console.log("Enviando dados...");
    if (this.formCliente.valid) {
      console.log("Cadastrando cliente...")
      console.log(this.formCliente.value);
      this.cadastroService.cadastrarCliente(this.formCliente.value).subscribe({
        //melhorar esse tratamento
        next: (res) => console.log('Cliente cadastrado com sucesso!', res),
        error: (err) => console.log('Falha ao cadastrar cliente', err),
      });

      console.log("Limpando campos...")
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
