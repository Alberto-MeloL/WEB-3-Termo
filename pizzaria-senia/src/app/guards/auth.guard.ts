// import { CanActivate, Router } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { AuthService } from '../controller/service/auth/auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router){}

//   canAcitvate(): boolean {
//     if (this.authService.estaLogado()) {
// return true;
//     }else{
//       this.router.navigate(['/login']);
//       return false
//     }
//   }
// }
