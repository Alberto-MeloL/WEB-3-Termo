import {CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
const router = inject(Router);
const protectedRoutes: string[] = ['/home'];
const sessao = true;//teste
  if (protectedRoutes.includes(state.url) && !sessao) {
    router.navigate(['/login']);
return false;

  }
  return true
}


