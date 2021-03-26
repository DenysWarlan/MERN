import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, switchMap} from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import {loadLogins, loadLoginsFailure, loadLoginsSuccess} from "../actions/login.actions";
import {authService} from "../services/auth.service";
import {loadRegisters, loadRegistersFailure, loadRegistersSuccess} from "../actions/register.actions";
import {HttpErrorResponse} from "@angular/common/http";



@Injectable()
export class AuthEffects {

  loadAuths$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AuthActions.loadAuths),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AuthActions.loadAuthsSuccess({ data })),
          catchError(error => of(AuthActions.loadAuthsFailure({ error }))))
      )
    );
  });

  login$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadLogins),
        map((action) => action.data),
        switchMap((payload) => {
          return this.service.login(payload).pipe(
            map((res: any) => {
              localStorage.setItem('token', JSON.stringify(res.token))
              localStorage.setItem('userId', JSON.stringify(res.userId))
              return loadLoginsSuccess({data: res})
            }),
            catchError((error: HttpErrorResponse) => of(loadLoginsFailure({error})))
          )
          }
        )
      )
    }
  );

  register$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadRegisters),
        map((action) => action.data),
        switchMap((payload) => {
          return this.service.register(payload).pipe(
            map((res: any) => loadRegistersSuccess({data: res})),
            catchError((error) => of(loadRegistersFailure({error})))
          )
          }
        )
      )
    }
  );



  constructor(private actions$: Actions, private service: authService) {}

}
