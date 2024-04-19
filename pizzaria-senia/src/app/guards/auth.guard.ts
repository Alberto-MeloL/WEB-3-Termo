import {CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
// import { AuthService } from '../controller/service/auth/auth.service';
import { inject } from '@angular/core';
import { AuthService } from '../controller/service/auth/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const authService = new AuthService();//instacia do service
const router = inject(Router);
// const authService = new AuthService().estaLogado()
const protectedRoutes: string[] = ['/home'];

  if (protectedRoutes.includes(state.url) && authService.estaLogado()) {
    router.navigate(['/login']);
return false;

  }
  return true
}


