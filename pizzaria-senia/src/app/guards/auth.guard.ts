// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   Router,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { AuthService } from '../controller/service/auth/auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     const protectedRoutes: string[] = [
//       '/home',
//       '/informacoes',
//       '/cardapio',
//       '/meu-pedido',
//     ];

//     if (protectedRoutes.includes(state.url) && !this.authService.estaLogado()) {
//       // Se o usuário não está logado e tenta acessar uma rota protegida, redirecione para o login.
//       this.router.navigate(['/login']);
//       return false;
//     }else{
//       this.router.navigate(['/home'])
//       return true;
//     }
//     // // Permitir acesso se não estiver tentando acessar uma rota protegida ou se estiver logado.
//     // return true;
//   }
// }
