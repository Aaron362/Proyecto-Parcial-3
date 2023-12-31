
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor( private auth:AuthService ) { }

  canActivate(next:ActivatedRouteSnapshot , state:RouterStateSnapshot): Observable<boolean> {
    return this.auth.isAuthenticated$;

  }
}

