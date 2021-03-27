import { createAction, props } from '@ngrx/store';

export const loadRegisters = createAction(
  '[Register] Load Registers',
  props<{ data: any }>()
);

export const loadRegistersSuccess = createAction(
  '[Register] Load Registers Success',
  props<{ data: any }>()
);

export const loadRegistersFailure = createAction(
  '[Register] Load Registers Failure',
  props<{ error: any }>()
);
export const loadRegistersClear = createAction(
  '[Register] Load Registers Clear'
);
