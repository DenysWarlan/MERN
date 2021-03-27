import { createAction, props } from '@ngrx/store';
import {HttpErrorResponse} from "@angular/common/http";
import {AddCoursesModel} from "../models/add-courses.model";

export const addCoursesAction = createAction(
  '[AddCourses] Load AddCoursess',
  props<{ data: AddCoursesModel }>()
);

export const addCoursesActionSuccess = createAction(
  '[AddCourses] Load AddCoursess Success',
  props<{ data: any }>()
);

export const addCoursesActionFailure = createAction(
  '[AddCourses] Load AddCoursess Failure',
  props<{ error: HttpErrorResponse }>()
);

export const addCoursesActionClear = createAction(
  '[AddCourses] Load AddCoursess Clear'
);
