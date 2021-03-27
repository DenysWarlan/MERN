import { createAction, props } from '@ngrx/store';
import {AddCoursesModel} from "../models/add-courses.model";
import {HttpErrorResponse} from "@angular/common/http";

export const loadCoursesListsAction = createAction(
  '[CoursesList] Load CoursesLists'
);

export const loadCoursesListsActionSuccess = createAction(
  '[CoursesList] Load CoursesLists Success',
  props<{ data: AddCoursesModel[] }>()
);

export const loadCoursesListsActionFailure = createAction(
  '[CoursesList] Load CoursesLists Failure',
  props<{ error: HttpErrorResponse }>()
);

export const loadCoursesListsActionClear = createAction(
  '[CoursesList] Load CoursesLists CLear'
);
