import { createAction, props } from '@ngrx/store';
import {HttpErrorResponse} from "@angular/common/http";

export const loadLogins = createAction(
  '[Login] Load Logins',
  props<{ data: any }>()
);

export const loadLoginsSuccess = createAction(
  '[Login] Load Logins Success',
  props<{ data: any }>()
);

export const loadLoginsFailure = createAction(
  '[Login] Load Logins Failure',
  props<{ error: HttpErrorResponse }>()
);
export const loadLoginsClear = createAction(
  '[Login] Load Logins Clear',
);
