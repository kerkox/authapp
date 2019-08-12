import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    console.log('next',next);

    if(this.auth.loggedIn){
        console.log('Paso el Guard');
        return true;
      } else{
        console.error('Bloqueado por el Guard');
        return false;
      }
  }

  constructor(private auth: AuthService) {

   }
}
