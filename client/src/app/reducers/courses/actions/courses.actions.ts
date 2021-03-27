import { createAction, props } from '@ngrx/store';

export const loadCoursess = createAction(
  '[Courses] Load Coursess'
);

export const loadCoursessSuccess = createAction(
  '[Courses] Load Coursess Success',
  props<{ data: any }>()
);

export const loadCoursessFailure = createAction(
  '[Courses] Load Coursess Failure',
  props<{ error: any }>()
);
