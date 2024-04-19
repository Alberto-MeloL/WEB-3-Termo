import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  estaLogado(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      return !!token && !this.tokenExpirado(token);
    }
    return false; // Retorna false se não estiver no ambiente do navegador
  }

  private tokenExpirado(token: string): boolean {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirado = payload.exp;
    const tempoAtual = Math.floor(new Date().getTime() / 1000);
    return tempoAtual >= expirado;
  }
}
