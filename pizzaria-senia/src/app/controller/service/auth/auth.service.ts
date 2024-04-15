import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private logado = new BehaviorSubject<boolean>(false);
  sessao: boolean = true;
  constructor() {}

  //   estaLogado(): boolean{
  //     const token = localStorage.getItem('token');

  //     return !! token && !this.tokenExpirado(token);
  //   }

  //   private tokenExpirado(token: string): boolean{
  //     const expirado = (JSON.parse(atob(token.split('.')[1]))).exp;
  // const sessao = Math.floor(new Date().getTime() / 1000) >= expirado;
  //     return sessao;
  //   }

  authenticated() {
    this.sessao = true;
  }
}

