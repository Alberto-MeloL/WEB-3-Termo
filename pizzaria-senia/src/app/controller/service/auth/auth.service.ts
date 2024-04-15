import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static sessao: boolean;
  constructor() { }

  estaLogado(): boolean {
    const token = localStorage.getItem('token');

    return !!token && !this.tokenExpirado(token);//retorna v ou f
    
  }

  private tokenExpirado(token: string): boolean {
    const expirado = (JSON.parse(atob(token.split('.')[1]))).exp;//acessao o playload do token
    const tempoAtual = Math.floor(new Date().getTime() / 1000) >= expirado;//iguala o tempo em mesma escala do token
    if (tempoAtual >= expirado) {

      return AuthService.sessao = false;
    }else{
      return AuthService.sessao = true
    }
  }
}

