import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';//maiusculo
export const authGuard: CanActivateFn = (
  routes: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const protectdRoutes: string[] = ['/informacoes'];
  const sessao = true;
  return protectdRoutes.includes(state.url) && !sessao ? router.navigate(['/home-deslogado']) : false;
};//ainda não funciona
