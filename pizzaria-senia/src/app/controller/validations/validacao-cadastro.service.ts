import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoCadastroService {

  validarCadastro(campos: any): { sucesso: boolean; mensagem?: string } {

    //dados
    const { nome, email, telefone, endereco, senha } = campos;

    if (nome.length < 4 || !this.validarNome(nome)) {
      return { sucesso: false, mensagem: 'Preencha o campo NOME corretamente.' }
    }

    if (!this.validarEmail(email)) {
      return { sucesso: false, mensagem: 'Preencha o campo EMAIL corretamente.' }

    }
    if (!this.validarTelefone(telefone)) {
      return { sucesso: false, mensagem: 'Preencha o campo TELEFONE corretamente.' }

    }

    if (typeof endereco !== 'string' || endereco.length < 1 ) {
        return { sucesso: false, mensagem: 'Preencha o campo ENDEREÇO corretamente.' }

    }

    if (!this.validarSenha(senha) || senha.length < 8) {
        return {sucesso: false, mensagem: 'Preencha o campo SENHA corretamenre.'}
        //menu bar e lancar o erro
    }

    //retorna true se todos os requisitos forem válidos
    return { sucesso: true }
  }

  //validar para não conter sequencias padrões EX: 123, abc ...

//validar nome
private validarNome(nome:string):boolean{
    const regexNome = /^[a-zA-Z]+$/

    return regexNome.test(nome);//retorna V ou F
}

  //validar o email
  private validarEmail(email: string): boolean {
    const regexEmail = /^[\w-._%+-]+senia@gmail\.com$/;//expressão simples para válidar email

    return regexEmail.test(email);//retorna V ou F

  }

//validar telefone
  private validarTelefone(telefone: string): boolean {
    const regexTelefone = /^[0-9]{2}\-[0-9]{5}\-[0-9]{4}$/;

    return regexTelefone.test(telefone);//retorna V ou F

  }

  //validar senha
  private validarSenha(senha: string): boolean {
//o que aconteceria se eu não declarace o boolean
    const regexSenha = /^(?=(?:.*?[A-Z]){3})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

    return regexSenha.test(senha);//retorna V ou F

  }
}//mangodb
