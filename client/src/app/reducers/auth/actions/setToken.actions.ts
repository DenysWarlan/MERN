import { createAction, props } from '@ngrx/store';

export const setToken = createAction(
  '[auth] Set token',
  props<{ data: any }>()
);

export const clearToken = createAction(
  '[auth]  clear token',
  props<{ data: any }>()
);
