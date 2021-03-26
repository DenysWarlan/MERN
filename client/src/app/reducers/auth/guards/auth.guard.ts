import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot,} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from "../../index";
import {JwtHelperService} from '@auth0/angular-jwt';
import {clearToken} from "../actions/setToken.actions";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private store: Store<State>, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token');
    const tokenParse = token ? JSON.parse(token) : false;
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(tokenParse);
    if (isExpired) {
      localStorage.clear();
      this.store.dispatch(clearToken({ data: ''}))
    }
    return !tokenParse || isExpired ? this.router.navigate(['login']) : true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
