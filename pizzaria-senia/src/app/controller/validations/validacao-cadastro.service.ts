// import { Injectable } from '@angular/core';
// import test from 'node:test';

// @Injectable({
//   providedIn: 'root'
// })
// export class ValidacaoCadastroService {

//   validarCadastro(campos: any): { sucesso: boolean; mensagem: string } {

//     //dados
//     const { nome, email, telefone, endereco, senha } = campos;

//     if (typeof nome !== 'string' || nome.length < 1) {
//       return { sucesso: false, mensagem: 'Preencha o campo NOME corretamente.' }
//     }

//     if (!this.validarEmail(email)) {
//       return { sucesso: false, mensagem: 'Preencha o campo EMAIL corretamente.' }

//     }
//     if (!this.validarTelefone(telefone)) {
//       return { sucesso: false, mensagem: 'Preencha o campo TELEFONE corretamente.' }

//     }

//     if (endereco) {
      
//     }
//     return { sucesso: true }
//   }
//   private validarEmail(email: string): boolean {
//     const regexEmail = /^[a-zA-Z0-9._%+-]+senia@gmail\.com$/;

//     return regexEmail.test(email);

//   }


//   private validarTelefone(telefone: string): boolean {
//     const regexTelefone = /^[0-9]{2}\-[0-9]{5}\-[0-9]{4}$/;

//     return regexTelefone.test(telefone);

//   }
// }//mangodb