import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  sessao: boolean = false;
  constructor() { }

  estaLogado(): boolean {
    const token = localStorage.getItem('token');

    return !!token && !this.tokenExpirado(token);
  }

  private tokenExpirado(token: string): boolean {
    const expirado = (JSON.parse(atob(token.split('.')[1]))).exp;
    const tempo = Math.floor(new Date().getTime() / 1000) >= expirado;
    if (tempo >= expirado) {

      return this.sessao = false;
    }else{
      return this.sessao = true
    }
  }
 getSessao(){
  return this.sessao;
}
}

